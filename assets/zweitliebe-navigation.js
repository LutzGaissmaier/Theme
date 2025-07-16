/* Zweitliebe Book Shop Navigation JavaScript */

if (!customElements.get('book-shop-navigation')) {
  class BookShopNavigation extends HTMLElement {
    constructor() {
      super();
      this.init();
    }

    init() {
      this.setupDropdowns();
      this.setupMobileMenu();
      this.setupStickyNavigation();
      this.setupCartUpdates();
      this.setupKeyboardNavigation();
    }

    setupDropdowns() {
      const dropdowns = this.querySelectorAll('.dropdown');
      
      dropdowns.forEach(dropdown => {
        const toggle = dropdown.querySelector('.dropdown-toggle');
        const menu = dropdown.querySelector('.dropdown-menu');
        
        if (!toggle || !menu) return;

        // Click to toggle
        toggle.addEventListener('click', (e) => {
          e.preventDefault();
          e.stopPropagation();
          this.toggleDropdown(dropdown);
        });

        // Hover for desktop
        if (window.matchMedia('(min-width: 768px)').matches) {
          dropdown.addEventListener('mouseenter', () => {
            this.showDropdown(dropdown);
          });

          dropdown.addEventListener('mouseleave', () => {
            this.hideDropdown(dropdown);
          });
        }

        // Close on outside click
        document.addEventListener('click', (e) => {
          if (!dropdown.contains(e.target)) {
            this.hideDropdown(dropdown);
          }
        });

        // Close on escape key
        document.addEventListener('keydown', (e) => {
          if (e.key === 'Escape') {
            this.hideDropdown(dropdown);
          }
        });
      });
    }

    toggleDropdown(dropdown) {
      const isActive = dropdown.classList.contains('active');
      
      // Close all other dropdowns
      this.querySelectorAll('.dropdown.active').forEach(other => {
        if (other !== dropdown) {
          this.hideDropdown(other);
        }
      });

      if (isActive) {
        this.hideDropdown(dropdown);
      } else {
        this.showDropdown(dropdown);
      }
    }

    showDropdown(dropdown) {
      dropdown.classList.add('active');
      const menu = dropdown.querySelector('.dropdown-menu');
      if (menu) {
        menu.classList.add('animate');
      }
    }

    hideDropdown(dropdown) {
      dropdown.classList.remove('active');
      const menu = dropdown.querySelector('.dropdown-menu');
      if (menu) {
        menu.classList.remove('animate');
      }
    }

    setupMobileMenu() {
      const toggles = this.querySelectorAll('.mobile-menu-toggle');
      
      toggles.forEach(toggle => {
        const menuId = toggle.getAttribute('data-mobile-menu');
        const menu = this.querySelector(`#mobile-menu-${menuId}`);
        
        if (!menu) return;

        toggle.addEventListener('click', () => {
          const isOpen = menu.classList.contains('show');
          
          if (isOpen) {
            this.closeMobileMenu(toggle, menu);
          } else {
            this.openMobileMenu(toggle, menu);
          }
        });
      });

      // Close mobile menu on window resize
      window.addEventListener('resize', () => {
        if (window.innerWidth >= 768) {
          this.querySelectorAll('.mobile-menu.show').forEach(menu => {
            const toggle = this.querySelector(`[data-mobile-menu="${menu.id.replace('mobile-menu-', '')}"]`);
            this.closeMobileMenu(toggle, menu);
          });
        }
      });
    }

    openMobileMenu(toggle, menu) {
      toggle.classList.add('active');
      menu.classList.remove('hidden');
      menu.classList.add('show');
      
      // Animate in
      setTimeout(() => {
        menu.style.transform = 'translateY(0)';
        menu.style.opacity = '1';
      }, 10);

      // Lock body scroll
      document.body.style.overflow = 'hidden';
    }

    closeMobileMenu(toggle, menu) {
      toggle.classList.remove('active');
      menu.style.transform = 'translateY(-10px)';
      menu.style.opacity = '0';
      
      setTimeout(() => {
        menu.classList.remove('show');
        menu.classList.add('hidden');
      }, 300);

      // Unlock body scroll
      document.body.style.overflow = '';
    }

    setupStickyNavigation() {
      let lastScrollTop = 0;
      const nav = this;
      const scrollThreshold = 100;

      window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > scrollThreshold) {
          nav.classList.add('sticky');
        } else {
          nav.classList.remove('sticky');
        }

        // Hide/show on scroll direction (optional)
        if (scrollTop > lastScrollTop && scrollTop > scrollThreshold) {
          // Scrolling down
          nav.style.transform = 'translateY(-100%)';
        } else {
          // Scrolling up
          nav.style.transform = 'translateY(0)';
        }

        lastScrollTop = scrollTop;
      });
    }

    setupCartUpdates() {
      // Listen for cart updates and update cart count
      document.addEventListener('cart:updated', (e) => {
        this.updateCartCount(e.detail.itemCount || 0);
      });

      // Fetch current cart count on load
      this.fetchCartCount();
    }

    async fetchCartCount() {
      try {
        const response = await fetch('/cart.js');
        const cart = await response.json();
        this.updateCartCount(cart.item_count);
      } catch (error) {
        console.error('Error fetching cart count:', error);
      }
    }

    updateCartCount(count) {
      const cartCountElements = this.querySelectorAll('.cart-count');
      cartCountElements.forEach(element => {
        element.textContent = count;
        
        // Add animation
        element.style.transform = 'scale(1.2)';
        setTimeout(() => {
          element.style.transform = 'scale(1)';
        }, 200);
      });
    }

    setupKeyboardNavigation() {
      // Arrow key navigation for dropdowns
      this.addEventListener('keydown', (e) => {
        const activeDropdown = this.querySelector('.dropdown.active');
        if (!activeDropdown) return;

        const items = activeDropdown.querySelectorAll('.dropdown-item');
        const currentFocus = document.activeElement;
        let currentIndex = Array.from(items).indexOf(currentFocus);

        switch (e.key) {
          case 'ArrowDown':
            e.preventDefault();
            currentIndex = (currentIndex + 1) % items.length;
            items[currentIndex].focus();
            break;
          
          case 'ArrowUp':
            e.preventDefault();
            currentIndex = currentIndex <= 0 ? items.length - 1 : currentIndex - 1;
            items[currentIndex].focus();
            break;
          
          case 'Enter':
            if (currentFocus && currentFocus.classList.contains('dropdown-item')) {
              currentFocus.click();
            }
            break;
        }
      });
    }

    // Search integration
    handleSearchSubmit(query, filters = {}) {
      const params = new URLSearchParams();
      
      if (query) {
        params.append('q', query);
      }
      
      Object.entries(filters).forEach(([key, value]) => {
        if (value) {
          params.append(key, value);
        }
      });

      const searchUrl = `/search?${params.toString()}`;
      window.location.href = searchUrl;
    }

    // Analytics tracking
    trackNavigation(category, action, label) {
      if (typeof gtag !== 'undefined') {
        gtag('event', action, {
          event_category: category,
          event_label: label
        });
      }
    }

    // Performance optimization
    debounce(func, wait) {
      let timeout;
      return function executedFunction(...args) {
        const later = () => {
          clearTimeout(timeout);
          func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
      };
    }
  }

  customElements.define('book-shop-navigation', BookShopNavigation);
}

// Initialize navigation when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  // Setup search form integration
  const searchForms = document.querySelectorAll('.book-nav__search form');
  searchForms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const formData = new FormData(form);
      const query = formData.get('q');
      
      if (query) {
        window.location.href = `/search?q=${encodeURIComponent(query)}`;
      }
    });
  });

  // Setup filter tracking
  const filterLinks = document.querySelectorAll('.dropdown-item[href*="search"]');
  filterLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const navigation = document.querySelector('book-shop-navigation');
      if (navigation) {
        const category = link.closest('.dropdown').querySelector('.dropdown-toggle').textContent.trim();
        navigation.trackNavigation('Navigation', 'Filter Click', `${category}: ${link.textContent.trim()}`);
      }
    });
  });

  // Setup category tracking
  const categoryLinks = document.querySelectorAll('a[href*="product_type"]');
  categoryLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const navigation = document.querySelector('book-shop-navigation');
      if (navigation) {
        navigation.trackNavigation('Navigation', 'Category Click', link.textContent.trim());
      }
    });
  });
});

// Export for external use
window.BookShopNavigation = {
  updateCartCount: (count) => {
    const nav = document.querySelector('book-shop-navigation');
    if (nav) {
      nav.updateCartCount(count);
    }
  },
  
  closeAllDropdowns: () => {
    const nav = document.querySelector('book-shop-navigation');
    if (nav) {
      nav.querySelectorAll('.dropdown.active').forEach(dropdown => {
        nav.hideDropdown(dropdown);
      });
    }
  }
}; 
/* Zweitliebe Advanced Book Search JavaScript */

if (!customElements.get('advanced-book-search')) {
  class AdvancedBookSearch extends HTMLElement {
    constructor() {
      super();
      this.form = this.querySelector('.advanced-book-search__form');
      this.tabButtons = this.querySelectorAll('.tab-btn');
      this.tabContents = this.querySelectorAll('.tab-content');
      
      this.init();
    }

    init() {
      this.addTabListeners();
      this.addFormValidation();
      this.addISBNFormatting();
      this.addSearchSuggestions();
    }

    addTabListeners() {
      this.tabButtons.forEach(button => {
        button.addEventListener('click', (e) => {
          e.preventDefault();
          const targetTab = button.dataset.tab;
          this.switchTab(targetTab);
        });
      });
    }

    switchTab(targetTab) {
      // Update tab buttons
      this.tabButtons.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.tab === targetTab);
      });

      // Update tab contents
      this.tabContents.forEach(content => {
        content.classList.toggle('active', content.dataset.tab === targetTab);
      });

      // Focus the first input in the active tab
      const activeContent = this.querySelector(`.tab-content[data-tab="${targetTab}"]`);
      const firstInput = activeContent.querySelector('input');
      if (firstInput) {
        setTimeout(() => firstInput.focus(), 100);
      }
    }

    addFormValidation() {
      this.form.addEventListener('submit', (e) => {
        if (!this.validateForm()) {
          e.preventDefault();
        }
      });

      // Real-time validation
      const inputs = this.querySelectorAll('input[type="text"], input[type="number"]');
      inputs.forEach(input => {
        input.addEventListener('blur', () => this.validateField(input));
        input.addEventListener('input', () => this.clearFieldError(input));
      });
    }

    validateForm() {
      const activeTab = this.querySelector('.tab-content.active');
      const activeTabName = activeTab.dataset.tab;
      let isValid = true;

      if (activeTabName === 'quick') {
        const quickSearch = activeTab.querySelector('input[name="q"]');
        if (!quickSearch.value.trim()) {
          this.showFieldError(quickSearch, 'Bitte geben Sie einen Suchbegriff ein');
          isValid = false;
        }
      } else if (activeTabName === 'isbn') {
        const isbnInput = activeTab.querySelector('input[name="isbn"]');
        if (!this.validateISBN(isbnInput.value)) {
          this.showFieldError(isbnInput, 'Bitte geben Sie eine gültige ISBN ein');
          isValid = false;
        }
      } else if (activeTabName === 'advanced') {
        // Check if at least one field is filled
        const fields = activeTab.querySelectorAll('input[type="text"], select');
        const hasValue = Array.from(fields).some(field => field.value.trim());
        
        if (!hasValue) {
          this.showGeneralError('Bitte füllen Sie mindestens ein Suchfeld aus');
          isValid = false;
        }

        // Validate price range
        const priceMin = activeTab.querySelector('input[name="price_min"]');
        const priceMax = activeTab.querySelector('input[name="price_max"]');
        
        if (priceMin.value && priceMax.value) {
          if (parseFloat(priceMin.value) > parseFloat(priceMax.value)) {
            this.showFieldError(priceMax, 'Der Höchstpreis muss größer als der Mindestpreis sein');
            isValid = false;
          }
        }
      }

      return isValid;
    }

    validateField(input) {
      this.clearFieldError(input);
      
      if (input.name === 'isbn') {
        if (input.value && !this.validateISBN(input.value)) {
          this.showFieldError(input, 'Ungültige ISBN-Nummer');
          return false;
        }
      }

      if (input.type === 'number') {
        if (input.value && parseFloat(input.value) < 0) {
          this.showFieldError(input, 'Der Wert muss positiv sein');
          return false;
        }
      }

      return true;
    }

    validateISBN(isbn) {
      if (!isbn) return false;
      
      // Remove hyphens and spaces
      const cleanISBN = isbn.replace(/[-\s]/g, '');
      
      // Check if it's 10 or 13 digits (with possible X at end for ISBN-10)
      const isbn10Pattern = /^[\d]{9}[\dX]$/;
      const isbn13Pattern = /^[\d]{13}$/;
      
      return isbn10Pattern.test(cleanISBN) || isbn13Pattern.test(cleanISBN);
    }

    addISBNFormatting() {
      const isbnInput = this.querySelector('input[name="isbn"]');
      if (isbnInput) {
        isbnInput.addEventListener('input', (e) => {
          let value = e.target.value.replace(/[^\d-X]/g, '');
          e.target.value = value;
        });
      }
    }

    addSearchSuggestions() {
      const authorInput = this.querySelector('input[name="author"]');
      const publisherInput = this.querySelector('input[name="vendor"]');
      
      if (authorInput) {
        this.addAutoComplete(authorInput, this.getAuthorSuggestions.bind(this));
      }
      
      if (publisherInput) {
        this.addAutoComplete(publisherInput, this.getPublisherSuggestions.bind(this));
      }
    }

    addAutoComplete(input, getSuggestions) {
      let timeout;
      let suggestionBox;

      input.addEventListener('input', (e) => {
        clearTimeout(timeout);
        
        if (e.target.value.length < 2) {
          this.hideSuggestions(suggestionBox);
          return;
        }

        timeout = setTimeout(() => {
          const suggestions = getSuggestions(e.target.value);
          suggestionBox = this.showSuggestions(input, suggestions);
        }, 300);
      });

      input.addEventListener('blur', () => {
        setTimeout(() => this.hideSuggestions(suggestionBox), 150);
      });
    }

    getAuthorSuggestions(query) {
      // In a real implementation, this would fetch from an API
      const commonAuthors = [
        'Stephen King', 'J.K. Rowling', 'Dan Brown', 'Agatha Christie',
        'George R.R. Martin', 'John Grisham', 'Paulo Coelho', 'Harper Lee'
      ];
      
      return commonAuthors.filter(author => 
        author.toLowerCase().includes(query.toLowerCase())
      ).slice(0, 5);
    }

    getPublisherSuggestions(query) {
      // In a real implementation, this would fetch from an API
      const commonPublishers = [
        'Penguin Random House', 'HarperCollins', 'Simon & Schuster',
        'Macmillan', 'Hachette', 'Springer', 'Wiley', 'Pearson'
      ];
      
      return commonPublishers.filter(publisher => 
        publisher.toLowerCase().includes(query.toLowerCase())
      ).slice(0, 5);
    }

    showSuggestions(input, suggestions) {
      this.hideSuggestions();
      
      if (suggestions.length === 0) return;

      const suggestionBox = document.createElement('div');
      suggestionBox.className = 'search-suggestions';
      suggestionBox.style.cssText = `
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        background: white;
        border: 1px solid #e5e7eb;
        border-radius: 6px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        z-index: 10;
        max-height: 200px;
        overflow-y: auto;
      `;

      suggestions.forEach(suggestion => {
        const item = document.createElement('div');
        item.className = 'suggestion-item';
        item.textContent = suggestion;
        item.style.cssText = `
          padding: 0.75rem 1rem;
          cursor: pointer;
          border-bottom: 1px solid #f3f4f6;
          transition: background-color 0.2s;
        `;
        
        item.addEventListener('mouseenter', () => {
          item.style.backgroundColor = '#f9fafb';
        });
        
        item.addEventListener('mouseleave', () => {
          item.style.backgroundColor = 'white';
        });
        
        item.addEventListener('click', () => {
          input.value = suggestion;
          this.hideSuggestions(suggestionBox);
          input.focus();
        });

        suggestionBox.appendChild(item);
      });

      input.parentElement.style.position = 'relative';
      input.parentElement.appendChild(suggestionBox);
      
      return suggestionBox;
    }

    hideSuggestions(suggestionBox) {
      if (suggestionBox && suggestionBox.parentElement) {
        suggestionBox.parentElement.removeChild(suggestionBox);
      }
    }

    showFieldError(input, message) {
      this.clearFieldError(input);
      
      const fieldGroup = input.closest('.search-field-group');
      fieldGroup.classList.add('error');
      
      const errorElement = document.createElement('div');
      errorElement.className = 'search-error-message';
      errorElement.textContent = message;
      
      fieldGroup.appendChild(errorElement);
      input.focus();
    }

    clearFieldError(input) {
      const fieldGroup = input.closest('.search-field-group');
      fieldGroup.classList.remove('error');
      
      const existingError = fieldGroup.querySelector('.search-error-message');
      if (existingError) {
        existingError.remove();
      }
    }

    showGeneralError(message) {
      this.clearGeneralError();
      
      const errorElement = document.createElement('div');
      errorElement.className = 'general-error-message';
      errorElement.style.cssText = `
        background: #fef2f2;
        border: 1px solid #fecaca;
        color: #dc2626;
        padding: 0.75rem 1rem;
        border-radius: 6px;
        margin-bottom: 1rem;
      `;
      errorElement.textContent = message;
      
      this.form.insertBefore(errorElement, this.form.firstChild);
    }

    clearGeneralError() {
      const existingError = this.querySelector('.general-error-message');
      if (existingError) {
        existingError.remove();
      }
    }
  }

  customElements.define('advanced-book-search', AdvancedBookSearch);
} 
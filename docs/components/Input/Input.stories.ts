export default {
  title: "Components/Input",
};

export const Basic = {
  render: () => `
    <div class="form__field">
      <label for="input-id-base" class="label">Input label</label>
      <input
        id="input-id-base"
        class="input" 
        type="text"
        placeholder="Input placeholder..."
      />
    </div>
  `,
};

export const HiddenLabel = {
  render: () => `
    <div class="form__field">
      <label for="input-id-base" class="label label--hide">Input label</label>
      <input
        id="input-id-base"
        class="input" 
        type="text"
        placeholder="Input placeholder..."
      />
    </div>
  `,
};

export const WithHelper = {
  render: () => `
    <div class="form">
      <div class="form__field">
        <label for="input-id-helper" class="label">
          Input label
        </label>
        <input
          aria-describedby="input-id-helper-message"
          id="input-id-helper"
          class="input"
          type="text"
          placeholder="Input placeholder..."
        />
        <div class="helper" id="input-id-helper-message">
          Bits of moving fluff Drake Equation descended from astronomers cosmic
          fugue Vangelis
        </div>
      </div>
      <div class="form__field">
        <label for="input-id-helper" class="label">
          Input label
        </label>
        <input
          aria-describedby="input-id-helper-message"
          id="input-id-helper"
          class="input"
          type="text"
          placeholder="Input placeholder..."
        />
        <div class="helper" id="input-id-helper-message">
          Bits of moving fluff Drake Equation descended from astronomers cosmic
          fugue Vangelis...
          <a href="#" class="link">
            Read more
          </a>
        </div>
      </div>
      <div class="form__field">
        <label for="input-inline" class="label label--wrapper">
          Input label
          <button
            type="button"
            class="icon-button icon-button--status icon-button--xs icon-button--help helper-button"
            title="Show help"
            aria-label="Show help"          
          >
            <i
              class="icon-button__icon gi-about_question_faq_help_filled"
              aria-hidden="true"
            ></i>
          </button>
        </label>
        <input
          id="input-inline"
          class="input"
          type="text"
          placeholder="Placeholder..."
        />
      </div>
    </div>
  `,
};

export const DockedValidation = {
  render: () => `
    <div class="form">
      <div class="form__field">
        <label for="input-id-error" class="label">
          Phone number
        </label>
        <input
          aria-describedby="input-id-error-message"
          aria-invalid="true"
          id="input-id-error"
          class="input input--error"
          type="text"
          placeholder="Enter the phone number..."
          value="12345678"
        />
        <div role="alert" class="validation" id="input-id-error-message">
          The telephone number must contain the state prefix and have more than 9
          digits.
        </div>
      </div>
      <div class="form__field">
        <label for="input-id-error" class="label">
          Phone number
        </label>
        <input
          aria-describedby="input-id-error-message"
          aria-invalid="true"
          id="input-id-error"
          class="input input--error"
          type="text"
          placeholder="Enter the phone number..."
          value="12345678"
        />
        <div role="alert" class="validation" id="input-id-error-message">
          The telephone number must contain the state prefix and have more than 9
          digits.
          <a href="#" class="link link--error">
            Read more
          </a>
        </div>
      </div>
      <div class="form__field">
        <label for="input-id-success" class="label">
          Phone number
        </label>
        <input
          aria-describedby="input-id-success-message"
          id="input-id-success"
          class="input input--success"
          type="text"
          placeholder="Enter the phone number..."
          value="+34 666555444"
        />
        <div role="alert" class="validation validation--success" id="input-id-success-message">
          The phone number formar is correct.
        </div>
      </div>
      <div class="form__field ">
        <label for="input-id-warning" class="label">
          Number of nodes
        </label>
        <input
          aria-describedby="input-id-warning-message"
          id="input-id-warning"
          class="input input--warning"
          type="text"
          placeholder="Enter the number of nodes..."
          value="4200"
        />
        <div role="alert" class="validation validation--warning" id="input-id-warning-message">
          Be careful because with more than 4000 nodes the system might be
          unstable.
        </div>
      </div>
    </div>
  `,
};

export const FloatingValidation = {
  render: () => `
    <div class="form">
      <div class="form__field">
        <label for="input-id-error-floating" class="label">
          Phone number
        </label>
        <div class="input-wrapper">
          <input
            aria-describedby="input-id-error-message"
            aria-invalid="true"
            id="input-id-error-floating"
            class="input input--error"
            type="text"
            placeholder="Enter the phone number..."
            value="12345678"
          />
          <button
            type="button"
            class="icon-button icon-button--status icon-button--xs icon-button--error validation-button"
            title="Show error message"
            aria-label="Show error message"
          >
            <i
              class="icon-button__icon gi-error_warning_danger_stop_filled"
              aria-hidden="true"
            ></i>
          </button>
        </div>
      </div>
      <div class="form__field">
        <label for="input-id-success-floating" class="label">
          Phone number
        </label>
        <div class="input-wrapper">
          <input
            aria-describedby="input-id-success-message"
            id="input-id-success-floating"
            class="input input--success"
            type="text"
            placeholder="Enter the phone number..."
            value="+34 666555444"
          />
          <button
            type="button"
            class="icon-button icon-button--status icon-button--xs icon-button--success validation-button"
            title="Show success message"
            aria-label="Show success message"
          >
            <i
              class="icon-button__icon gi-ok_successful_check_filled"
              aria-hidden="true"
            ></i>
          </button>
        </div>
      </div>
      <div class="form__field ">
        <label for="input-id-warning" class="label">
          Number of nodes
        </label>
        <div class="input-wrapper">
          <input
            aria-describedby="input-id-warning-message"
            id="input-id-warning"
            class="input input--warning"
            type="text"
            placeholder="Enter the number of nodes..."
            value="4200"
          />
          <button
            type="button"
            class="icon-button icon-button--status icon-button--xs icon-button--warning validation-button"
            title="Show warning message"
            aria-label="Show warning message"
          >
            <i
              class="icon-button__icon gi-attention_error_alert_caution_filled"
              aria-hidden="true"
            ></i>
          </button>
        </div>
      </div>
    </div>
  `,
};

export const Sizes = {
  render: () => `
    <div class="form">
      <div class="form__field">
        <label for="input-sm" class="label label--sm">
          Size sm
        </label>
        <input
          id="input-sm"
          class="input input--sm"
          type="text"
          placeholder="Input placeholder..."
        />
        <div class="helper helper--sm">
          Bits of moving fluff Drake Equation descended from astronomers cosmic
          fugue Vangelis
        </div>
      </div>
      <div class="form__field">
        <label for="input-md" class="label">
          Size md (default)
        </label>
        <input
          id="input-md"
          class="input"
          type="text"
          placeholder="Input placeholder..."
        />
        <div class="helper">
          Bits of moving fluff Drake Equation descended from astronomers cosmic
          fugue Vangelis
        </div>
      </div>
      <div class="form__field">
        <label for="input-lg" class="label label--lg">
          Size lg
        </label>
        <input
          id="input-lg"
          class="input input--lg"
          type="text"
          placeholder="Input placeholder..."
        />
        <div class="helper helper--lg">
          Bits of moving fluff Drake Equation descended from astronomers cosmic
          fugue Vangelis
        </div>
      </div>
    </div>
  `,
};

export const Width = {
  render: () => `
    <div class="form">
      <div class="form__field">
        <label for="input-width-xxs" class="label">
          Input width xxs
        </label>
        <input id="input-width-xxs" class="input input--width-xxs" type="text" />
      </div>
      <div class="form__field">
        <label for="input-width-xs" class="label">
          Input width xs
        </label>
        <input id="input-width-xs" class="input input--width-xs" type="text" />
      </div>
      <div class="form__field">
        <label for="input-width-sm" class="label">
          Input width sm
        </label>
        <input id="input-width-sm" class="input input--width-sm" type="text" />
      </div>
      <div class="form__field">
        <label for="input-width-md" class="label">
          Input width md
        </label>
        <input id="input-width-md" class="input input--width-md" type="text" />
      </div>
      <div class="form__field">
        <label for="input-width-lg" class="label">
          Input width lg
        </label>
        <input id="input-width-lg" class="input input--width-lg" type="text" />
      </div>
      <div class="form__field">
        <label for="input-width-xl" class="label">
          Input width xl
        </label>
        <input id="input-width-xl" class="input input--width-xl" type="text" />
      </div>
      <div class="form__field">
        <label for="input-width-default" class="label">
          Input width default
        </label>
        <input id="input-width-default" class="input" type="text" />
      </div>
    </div>
  `,
};

export const Status = {
  render: () => `
    <div class="form">
      <div class="form__field">
        <label for="input-id-error" class="label">
          Phone number
        </label>
        <input
          aria-describedby="input-id-error-message"
          aria-invalid="true"
          id="input-id-error"
          class="input input--error"
          type="text"
          placeholder="Enter the phone number..."
          value="12345678"
        />
        <div role="alert" class="validation" id="input-id-error-message">
          The telephone number must contain the state prefix and have more than 9
          digits.
        </div>
      </div>
      <div class="form__field">
        <label for="input-id-success" class="label">
          Phone number
        </label>
        <input
          aria-describedby="input-id-success-message"
          id="input-id-success"
          class="input input--success"
          type="text"
          placeholder="Enter the phone number..."
          value="+34 666555444"
        />
        <div role="alert" class="validation validation--success" id="input-id-success-message">
          The phone number formar is correct.
        </div>
      </div>
      <div class="form__field">
        <label for="input-id-warning" class="label">
          Number of nodes
        </label>
        <input
          aria-describedby="input-id-warning-message"
          id="input-id-warning"
          class="input input--warning"
          type="text"
          placeholder="Enter the number of nodes..."
          value="4200"
        />
        <div role="alert" class="validation validation--warning" id="input-id-warning-message">
          Be careful because with more than 4000 nodes the system might be
          unstable.
        </div>
      </div>
    </div>
  `,
};

export const LabelToLeft = {
  render: () => `
    <div class="form">
      <div class="form__field form__field--hor">
        <label for="input-inline" class="label label--wrapper">
          Input label
          <button
            type="button"
            class="icon-button icon-button--status icon-button--xxs icon-button--help form__helper-button"
            title="Show help"
            aria-label="Show help"
          >
            <i
              class="icon-button__icon gi-about_question_faq_help_filled"
              aria-hidden="true"
            ></i>
          </button>
        </label>
        <input
          id="input-inline"
          class="input"
          type="text"
          placeholder="Placeholder..."
        />
      </div>
      <div class="form__field form__field--hor">
        <label for="input-error-inline" class="label">
          Phone number
        </label>
        <div class="input-wrapper">
          <input
            id="input-error-inline"
            class="input"
            type="text"
            placeholder="Enter the phone number..."
            value="12345678"
          />
          <button
            type="button"
            class="icon-button icon-button--status icon-button--xs icon-button--error form__validation-button"
            title="Show error message"
            aria-label="Show error message"
          >
            <i
              class="icon-button__icon gi-error_warning_danger_stop_filled"
              aria-hidden="true"
            ></i>
          </button>
        </div>
      </div>
    </div>
  `,
};

export const Required = {
  render: () => `
    <div class="form__field">
      <label for="input-id-required" class="label label--required">
        Required field
      </label>
      <input
        class="input"
        id="input-id-required"
        placeholder="Input placeholder..."
        required
        type="text"
      />
    </div>
  `,
};

export const Disabled = {
  render: () => `
    <div class="form__field">
      <label for="input-id-disabled" class="label">
        Disabled field
      </label>
      <input
        id="input-id-disabled"
        class="input"
        type="text"
        placeholder="Input placeholder..."
        disabled
      />
    </div>
  `,
};

export const Readonly = {
  render: () => `
    <div class="form__field">
      <label for="input-id-readonly" class="label">
        Readonly field
      </label>
      <input
        id="input-id-readonly"
        class="input"
        type="text"
        readonly="true"
        value="Value of input for readonly"
      />
    </div>
  `,
};

export const CaseColor = {
  render: () => `
    <div class="form">
      <div class="form__field">
        <label for="input-id-color" class="label">
          Color field
        </label>
        <input
          id="input-id-color"
          class="input"
          type="color"
          value="#D7E817"
        />
      </div>
      <div class="form__field">
        <label for="input-id-color-wide" class="label">
          Color field wide
        </label>
        <input
          id="input-id-color-wide"
          class="input input--width-wide"
          type="color"
          value="#D7E817"
        />
      </div>
    </div>
  `,
};

export const CasePassword = {
  render: () => `
    <div class="form__field">
      <label for="input-id-search" class="label">
        Password field
      </label>
      <div class="input-wrapper input-wrapper--password">
        <input
          id="input-id-search"
          class="input"
          type="password"
          placeholder="Enter search criteria..."
        />
        <button
          type="button"
          class="icon-button icon-button--xs icon-button--circular"
          title="Show/hide password"
          aria-label="Show/hide password"
        >
          <i
            class="icon-button__icon gi-eye_visibility_show_visible"
            aria-hidden="true"
          ></i>
        </button>
      </div>
    </div>
  `,
};

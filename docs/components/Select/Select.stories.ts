export default {
  title: "Components/Select",
};

export const Basic = {
  render: () => `
    <div class="form__field">
      <label for="select-id-base" class="label">
        Select label
      </label>
      <select id="select-id-base" class="select">
        <option value="" disabled selected>
          Select your option
        </option>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
      </select>
    </div>
  `,
};

export const HiddenLabel = {
  render: () => `
    <div class="form__field">
      <label for="select-id-base" class="label label--hide">
        Select label
      </label>
      <select id="select-id-base" class="select">
        <option value="" disabled selected>
          Select your option
        </option>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
      </select>
    </div>
  `,
};

export const Helper = {
  render: () => `
    <div class="form">
      <div class="form__field">
        <label for="select-id-helper" class="label">
          Select label
        </label>
        <select
          aria-describedby="select-id-helper-message"
          id="select-id-helper"
          class="select"
        >
          <option value="" disabled selected>
            Select your option
          </option>
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
        </select>
        <div class="helper" id="select-id-helper-message">
          Bits of moving fluff Drake Equation descended from astronomers cosmic
          fugue Vangelis
        </div>
      </div>
      <div class="form__field">
        <label for="select-id-helper" class="label">
          Select label
        </label>
        <select
          aria-describedby="select-id-helper-message"
          id="select-id-helper"
          class="select"
        >
          <option value="" disabled selected>
            Select your option
          </option>
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
        </select>
        <div class="helper" id="select-id-helper-message">
          Bits of moving fluff Drake Equation descended from astronomers cosmic
          fugue Vangelis...
          <a href="#" class="link">
            Read more
          </a>
        </div>
      </div>
      <div class="form__field">
        <label for="select-inline" class="label label--wrapper">
          Select label
          <button
            type="button"
            class="icon-button icon-button--status icon-button--xs icon-button--help"
            title="Show help"
            aria-label="Show help"
          >
            <i
              class="icon-button__icon gi-about_question_faq_help_filled"
              aria-hidden="true"
            ></i>
          </button>
        </label>
        <select id="select-inline" class="select">
          <option value="" disabled selected>
            Select your option
          </option>
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
        </select>
      </div>
    </div>
  `,
};

export const DockedValidation = {
  render: () => `
    <div class="form">
      <div class="form__field ">
        <label for="select-id-error" class="label">
          Options
        </label>
        <select
          aria-describedby="select-id-error-message"
          aria-invalid="true"
          id="select-id-error"
          class="select select--error"
        >
          <option value="" disabled>
            Select your option
          </option>
          <option value="1" selected>
            Option 1
          </option>
          <option value="2">Option 2</option>
        </select>
        <div role="alert" class="validation" id="select-id-error-message">
          This option can not be selected with the current configuration.
        </div>
      </div>
      <div class="form__field ">
        <label for="select-id-error" class="label">
          Options
        </label>
        <select
          aria-describedby="select-id-error-message"
          aria-invalid="true"
          id="select-id-error"
          class="select select--error"
        >
          <option value="" disabled>
            Select your option
          </option>
          <option value="1" selected>
            Option 1
          </option>
          <option value="2">Option 2</option>
        </select>
        <div role="alert" class="validation" id="select-id-error-message">
          This option can not be selected with the current configuration.
          <a href="#" class="link link--error">
            Read more
          </a>
        </div>
      </div>
      <div class="form__field ">
        <label for="select-id-success" class="label">
          Options
        </label>
        <select
          aria-describedby="select-id-success-message"
          id="select-id-success"
          class="select select--success"
        >
          <option value="" disabled>
            Select your option
          </option>
          <option value="1">Option 1</option>
          <option value="2" selected>
            Option 2
          </option>
        </select>
        <div role="alert" class="validation validation--success" id="select-id-success-message">
          This option is correct.
        </div>
      </div>
      <div class="form__field ">
        <label for="select-id-warning" class="label">
          Options
        </label>
        <select
          aria-describedby="select-id-warning-message"
          id="select-id-warning"
          class="select select--warning"
        >
          <option value="" disabled>
            Select your option
          </option>
          <option value="1" selected>
            Option 1
          </option>
          <option value="2">Option 2</option>
        </select>
        <div role="alert" class="validation validation--warning" id="select-id-warning-message">
          Be careful because with this selected option the system might be
          unstable.
        </div>
      </div>
    </div>
  `,
};

export const FloatingValidation = {
  render: () => `
    <div class="form">
      <div class="form__field ">
        <label for="select-id-error-floating" class="label">
          Options
        </label>
        <div class="input-wrapper">
          <select
            aria-describedby="select-id-error-message"
            aria-invalid="true"
            id="select-id-error-floating"
            class="select select--error"
          >
            <option value="" disabled>
              Select your option
            </option>
            <option value="1" selected>
              Option 1
            </option>
            <option value="2">Option 2</option>
          </select>
          <button
            type="button"
            class="icon-button icon-button--status icon-button--xs icon-button--error"
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
      <div class="form__field ">
        <label for="select-id-success-floating" class="label">
          Options
        </label>
        <div class="input-wrapper">
          <select
            aria-describedby="select-id-success-message"
            id="select-id-success-floating"
            class="select select--success"
          >
            <option value="" disabled>
              Select your option
            </option>
            <option value="1">Option 1</option>
            <option value="2" selected>
              Option 2
            </option>
          </select>
          <button
            type="button"
            class="icon-button icon-button--status icon-button--xs icon-button--success"
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
        <label for="select-id-warning" class="label">
          Options
        </label>
        <div class="input-wrapper">
          <select
            aria-describedby="select-id-warning-message"
            id="select-id-warning"
            class="select select--warning"
          >
            <option value="" disabled>
              Select your option
            </option>
            <option value="1">Option 1</option>
            <option value="2" selected>
              Option 2
            </option>
          </select>
          <button
            type="button"
            class="icon-button icon-button--status icon-button--xs icon-button--warning"
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
        <label for="select-sm" class="label">
          Size sm
        </label>
        <select id="select-sm" class="select--sm">
          <option value="" disabled selected>
            Select your option
          </option>
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
        </select>
        <div class="helper helper--sm">
          Bits of moving fluff Drake Equation descended from astronomers cosmic
          fugue Vangelis
        </div>
      </div>
      <div class="form__field">
        <label for="select-md" class="label label--md">
          Size md (default)
        </label>
        <select id="select-md" class="select select--md">
          <option value="" disabled selected>
            Select your option
          </option>
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
        </select>
        <div class="helper helper--md">
          Bits of moving fluff Drake Equation descended from astronomers cosmic
          fugue Vangelis
        </div>
      </div>
      <div class="form__field">
        <label for="select-lg" class="label label--lg">
          Size lg
        </label>
        <select id="select-lg" class="select select--lg">
          <option value="" disabled selected>
            Select your option
          </option>
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
        </select>
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
        <label for="select-width-xxs" class="label">
          Select width xxs
        </label>
        <select id="select-width-xxs" class="select input--width-xxs">
          <option value="" disabled selected>
            Select your option
          </option>
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
        </select>
      </div>
      <div class="form__field">
        <label for="select-width-xs" class="label">
          Select width xs
        </label>
        <select id="select-width-xs" class="select input--width-xs">
          <option value="" disabled selected>
            Select your option
          </option>
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
        </select>
      </div>
      <div class="form__field">
        <label for="select-width-sm" class="label">
          Select width sm
        </label>
        <select id="select-width-sm" class="select input--width-sm">
          <option value="" disabled selected>
            Select your option
          </option>
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
        </select>
      </div>
      <div class="form__field">
        <label for="select-width-md" class="label">
          Select width md
        </label>
        <select id="select-width-md" class="select input--width-md">
          <option value="" disabled selected>
            Select your option
          </option>
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
        </select>
      </div>
      <div class="form__field">
        <label for="select-width-lg" class="label">
          Select width lg
        </label>
        <select id="select-width-lg" class="select input--width-lg">
          <option value="" disabled selected>
            Select your option
          </option>
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
        </select>
      </div>
      <div class="form__field">
        <label for="select-width-xl" class="label">
          Select width xl
        </label>
        <select id="select-width-xl" class="select input--width-xl">
          <option value="" disabled selected>
            Select your option
          </option>
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
        </select>
      </div>
      <div class="form__field">
        <label for="select-width-default" class="label">
          Select width default
        </label>
        <select id="select-width-default" class="select">
          <option value="" disabled selected>
            Select your option
          </option>
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
        </select>
      </div>
    </div>
  `,
};

export const Status = {
  render: () => `
    <div class="form">
      <div class="form__field">
        <label for="select-id-error" class="label">
          Options
        </label>
        <select
          aria-describedby="select-id-error-message"
          aria-invalid="true"
          id="select-id-error"
          class="select select--error"
        >
          <option value="" disabled>
            Select your option
          </option>
          <option value="1" selected>
            Option 1
          </option>
          <option value="2">Option 2</option>
        </select>
        <div role="alert" class="validation validation--error" id="select-id-error-message">
          This option can not be selected with the current configuration.
        </div>
      </div>
      <div class="form__field">
        <label for="select-id-success" class="label">
          Options
        </label>
        <select
          aria-describedby="select-id-success-message"
          id="select-id-success"
          class="select select--success"
        >
          <option value="" disabled>
            Select your option
          </option>
          <option value="1">Option 1</option>
          <option value="2" selected>
            Option 2
          </option>
        </select>
        <div role="alert" class="validation validation--success" id="select-id-success-message">
          This option is correct.
        </div>
      </div>
      <div class="form__field">
        <label for="select-id-warning" class="label">
          Options
        </label>
        <select
          aria-describedby="select-id-warning-message"
          id="select-id-warning"
          class="select select--warning"
        >
          <option value="" disabled>
            Select your option
          </option>
          <option value="1">Option 1</option>
          <option value="2" selected>
            Option 2
          </option>
        </select>
        <div role="alert" class="validation validation--warning" id="select-id-warning-message">
          Be careful because with this selected option the system might be
          unstable.
        </div>
      </div>
    </div>
  `,
};

export const Horizontal = {
  render: () => `
    <div class="form">
      <div class="form__field form__field--hor">
        <label for="select-inline" class="label label--wrapper">
          Select label
          <button
            type="button"
            class="icon-button icon-button--status icon-button--xs icon-button--help"
            title="Show help"
            aria-label="Show help"
          >
            <i
              class="icon-button__icon gi-about_question_faq_help_filled"
              aria-hidden="true"
            ></i>
          </button>
        </label>
        <select id="select-inline" class="select">
          <option value="" disabled selected>
            Select your option
          </option>
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
        </select>
      </div>
      <div class="form__field  form__field--hor">
        <label for="select-error-inline" class="label">
          Options
        </label>
        <select id="select-error-inline" class="select">
          <option value="" disabled>
            Select your option
          </option>
          <option value="1" selected>
            Option 1
          </option>
          <option value="2">Option 2</option>
        </select>
        <button
          type="button"
          class="icon-button icon-button--status icon-button--xs icon-button--error"
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
  `,
};

export const Required = {
  render: () => `
    <div class="form__field">
      <label for="select-id-required" class="label label--required">
        Required field
      </label>
      <select class="select" id="select-id-required" required>
        <option value="" disabled selected>
          Select your option
        </option>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
      </select>
    </div>
  `,
};

export const Disabled = {
  render: () => `
    <div class="form__field">
      <label for="select-id-disabled" class="label">
        Disabled field
      </label>
      <select id="select-id-disabled" class="select" disabled>
        <option value="" disabled selected>
          Select your option
        </option>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
      </select>
    </div>
  `,
};

export const Readonly = {
  render: () => `
    <div class="form__field">
      <label for="select-id-readonly" class="label">
        Readonly field
      </label>
      <input id="select-id-readonly" class="input" value="option selected value" readonly>
    </div>
  `,
};

export const CaseMultiple = {
  render: () => `
    <div class="form__field">
      <label for="select-id-multiple" class="label">
        Multiple field
      </label>
      <select id="select-id-multiple" class="select" multiple>
        <option value="1">Option 1</option>
        <option value="2" disabled>
          Option 2
        </option>
        <option value="3">Option 3</option>
        <option value="4">Option 4</option>
        <option value="5">Option 5</option>
        <option value="6">Option 6</option>
        <option value="7">Option 7</option>
      </select>
    </div>
  `,
};

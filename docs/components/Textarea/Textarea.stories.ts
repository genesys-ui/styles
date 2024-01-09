export default {
  title: "Components/Textarea",
};

export const Basic = {
  render: () => `
    <div class="form__field">
      <label for="textarea-id-base" class="label">
        Textarea label
      </label>
      <textarea id="textarea-id-base" class="textarea" placeholder="Textarea placeholder..." /></textarea>
    </div>
  `,
};

export const HiddenLabel = {
  render: () => `
    <div class="form__field">
      <label for="textarea-id-base" class="label label--hide">
        Textarea label
      </label>
      <textarea id="textarea-id-base" class="textarea" /></textarea>
    </div>
  `,
};

export const Helper = {
  render: () => `
    <div class="form">
      <div class="form__field">
        <label for="textarea-id-helper" class="label">
          Textarea label
        </label>
        <textarea
          aria-describedby="textarea-id-helper-message"
          id="textarea-id-helper"
          class="textarea"
        /></textarea>
        <div class="helper" id="textarea-id-helper-message">
          Bits of moving fluff Drake Equation descended from astronomers cosmic
          fugue Vangelis
        </div>
      </div>
      <div class="form__field">
        <label for="textarea-id-helper" class="label">
          Textarea label
        </label>
        <textarea
          aria-describedby="textarea-id-helper-message"
          id="textarea-id-helper"
          class="textarea"
        /></textarea>
        <div class="helper" id="textarea-id-helper-message">
          Bits of moving fluff Drake Equation descended from astronomers cosmic
          fugue Vangelis...
          <a href="#" class="link">
            Read more
          </a>
        </div>
      </div>
      <div class="form__field">
        <label for="textarea-inline" class="label label--wrapper">
          Textarea label
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
        <textarea id="textarea-inline" class="textarea" /></textarea>
      </div>
    </div>
  `,
};

export const DockedValidation = {
  render: () => `
    <div class="form">
      <div class="form__field">
        <label for="textarea-id-error" class="label">
          Options
        </label>
        <textarea
          aria-describedby="textarea-id-error-message"
          aria-invalid="true"
          id="textarea-id-error"
          class="textarea textarea--error"
        /></textarea>
        <div role="alert" class="validation" id="textarea-id-error-message">
          This option can not be selected with the current configuration.
        </div>
      </div>
      <div class="form__field">
        <label for="textarea-id-error" class="label">
          Options
        </label>
        <textarea
          aria-describedby="textarea-id-error-message"
          aria-invalid="true"
          id="textarea-id-error"
          class="textarea textarea--error"
        /></textarea>
        <div role="alert" class="validation" id="textarea-id-error-message">
          This option can not be selected with the current configuration.
          <a href="#" class="link link--error">
            Read more
          </a>
        </div>
      </div>
      <div class="form__field">
        <label for="textarea-id-success" class="label">
          Options
        </label>
        <textarea
          aria-describedby="textarea-id-success-message"
          id="textarea-id-success"
          class="textarea textarea--success"
        /></textarea>
        <div role="alert" class="validation validation--success" id="textarea-id-success-message">
          This option is correct.
        </div>
      </div>
      <div class="form__field">
        <label for="textarea-id-warning" class="label">
          Options
        </label>
        <textarea
          aria-describedby="textarea-id-warning-message"
          id="textarea-id-warning"
          class="textarea textarea--warning"
        /></textarea>
        </textarea>
        <div role="alert" class="validation validation--warning" id="textarea-id-warning-message">
          Be careful because with this selected option the system might be
          unstable.
        </div>
      </div>
    </div>
  `,
};

export const Sizes = {
  render: () => `
    <div class="form">
      <div class="form__field">
        <label for="textarea-sm" class="label label--sm">
          Size sm
        </label>
        <textarea id="textarea-sm" class="textarea textarea--sm" /></textarea>
        <div class="helper helper--sm">
          Bits of moving fluff Drake Equation descended from astronomers cosmic
          fugue Vangelis
        </div>
      </div>
      <div class="form__field">
        <label for="textarea-md" class="label label--md">
          Size md (default)
        </label>
        <textarea id="textarea-md" class="textarea textarea--md" /></textarea>
        <div class="helper helper--md">
          Bits of moving fluff Drake Equation descended from astronomers cosmic
          fugue Vangelis
        </div>
      </div>
      <div class="form__field">
        <label for="textarea-lg" class="label label--lg">
          Size lg
        </label>
        <textarea id="textarea-lg" class="textarea textarea--lg" /></textarea>
        <div class="helper helper--lg">
          Bits of moving fluff Drake Equation descended from astronomers cosmic
          fugue Vangelis
        </div>
      </div>
    </div>
  `,
};

export const Status = {
  render: () => `
    <div class="form">
      <div class="form__field">
        <label for="textarea-id-error" class="label">
          Options
        </label>
        <textarea
          aria-describedby="textarea-id-error-message"
          aria-invalid="true"
          id="textarea-id-error"
          class="textarea textarea--error"
        /></textarea>
        <div role="alert" class="validation validation--error" id="textarea-id-error-message">
          This option can not be selected with the current configuration.
        </div>
      </div>
      <div class="form__field">
        <label for="textarea-id-success" class="label">
          Options
        </label>
        <textarea
          aria-describedby="textarea-id-success-message"
          id="textarea-id-success"
          class="textarea textarea--success"
        /></textarea>
        <div role="alert" class="validation validation--success" id="textarea-id-success-message">
          This option is correct.
        </div>
      </div>
      <div class="form__field">
        <label for="textarea-id-warning" class="label">
          Options
        </label>
        <textarea
          aria-describedby="textarea-id-warning-message"
          id="textarea-id-warning"
          class="textarea textarea--warning"
        /></textarea>
        <div role="alert" class="validation validation--warning" id="textarea-id-warning-message">
          Be careful because with this selected option the system might be unstable.
        </div>
      </div>
    </div>
  `,
};

export const Required = {
  render: () => `
    <div class="form__field">
      <label for="textarea-id-required" class="label label--required">
        Required field
      </label>
      <textarea class="textarea" id="textarea-id-required" required /></textarea>
    </div>
  `,
};

export const Disabled = {
  render: () => `
    <div class="form__field">
      <label for="textarea-id-disabled" class="label">
        Disabled field
      </label>
      <textarea id="textarea-id-disabled" class="textarea" disabled /></textarea>
    </div>
  `,
};

export const Readonly = {
  render: () => `
    <div class="form__field">
      <label for="textarea-id-readonly" class="label">
        Readonly field
      </label>
      <textarea id="textarea-id-readonly" class="textarea" readonly />Emerged into consciousness radio telescope light years across the centuries rich in heavy atoms not a sunrise but a galaxyrise.</textarea>
    </div>
  `,
};

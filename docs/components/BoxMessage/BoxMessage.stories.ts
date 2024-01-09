export default {
  title: "Components/BoxMessage",
};

export const Basic = {
  render: () => `<div class="box-message box-message--info" aria-live="polite">
    <h5 class="box-message__title">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    </h5>
  </div>`,
};

export const Content = {
  render: () => `<div class="box-message box-message--info" aria-live="polite">
    <h5 class="box-message__title">This is some title</h5>
    <div class="box-message__content">
      <p class="paragraph">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <p class="paragraph">
        Vitae semper quis lectus nulla at volutpat. Venenatis lectus magna
        fringilla urna porttitor rhoncus. Habitant morbi tristique senectus et
        netus.
      </p>
    </div>
  </div>`,
};

export const CloseButton = {
  render: () => `<div class="box-message box-message--info" aria-live="polite">
    <h5 class="box-message__title">This is some title</h5>
    <div class="box-message__content">
      <p class="paragraph">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </div>
    <button
      class="box-message__remove-button icon-button icon-button--xs
      icon-button--remove"
      title="Remove notification"
      type="button"
      aria-label="close"
    ></button>
  </div>`,
};

export const Buttons = {
  render: () => `<div class="box-message box-message--info" aria-live="polite">
    <h5 class="box-message__title">This is some title</h5>
    <div class="box-message__content">
      <p class="paragraph">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </div>
    <div class="box-message__buttons">
      <button class="button button--quiet" type="button">
        <span class="button__text">Cancel</span>
      </button>
      <button class="button button--info" type="button">
        <span class="button__text">Apply</span>
      </button>
    </div>
  </div>`,
};

export const Status = {
  render:
    () => `  <div class="box-message box-message--error" aria-live="assertive">
    <h5 class="box-message__title">This is some title</h5>
    <div class="box-message__content">
      <p class="paragraph">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </div>
    <div class="box-message__buttons">
      <button class="button button--quiet" type="button">
        <span class="button__text">Cancel</span>
      </button>
      <button class="button button--error" type="button">
        <span class="button__text">Apply</span>
      </button>
    </div>
    <button
      class="box-message__remove-button icon-button icon-button--xs
      icon-button--remove"
      title="Remove notification"
      type="button"
      aria-label="close"
    ></button>
  </div>
  <div class="box-message box-message--help" aria-live="polite">
    <h5 class="box-message__title">This is some title</h5>
    <div class="box-message__content">
      <p class="paragraph">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </div>
    <div class="box-message__buttons">
      <button class="button button--quiet" type="button">
        <span class="button__text">Cancel</span>
      </button>
      <button class="button button--help" type="button">
        <span class="button__text">Apply</span>
      </button>
    </div>
    <button
      class="box-message__remove-button icon-button icon-button--xs
      icon-button--remove"
      title="Remove notification"
      type="button"
      aria-label="close"
    ></button>
  </div>
  <div class="box-message box-message--info" aria-live="polite">
    <h5 class="box-message__title">This is some title</h5>
    <div class="box-message__content">
      <p class="paragraph">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </div>
    <div class="box-message__buttons">
      <button class="button button--quiet" type="button">
        <span class="button__text">Cancel</span>
      </button>
      <button class="button button--info" type="button">
        <span class="button__text">Apply</span>
      </button>
    </div>
    <button
      class="box-message__remove-button icon-button icon-button--xs
      icon-button--remove"
      title="Remove notification"
      type="button"
      aria-label="close"
    ></button>
  </div>
  <div class="box-message box-message--success" aria-live="polite">
    <h5 class="box-message__title">This is some title</h5>
    <div class="box-message__content">
      <p class="paragraph">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </div>
    <div class="box-message__buttons">
      <button class="button button--quiet" type="button">
        <span class="button__text">Cancel</span>
      </button>
      <button class="button button--success" type="button">
        <span class="button__text">Apply</span>
      </button>
    </div>
    <button
      class="box-message__remove-button icon-button icon-button--xs
      icon-button--remove"
      title="Remove notification"
      type="button"
      aria-label="close"
    ></button>
  </div>
  <div class="box-message box-message--warning" aria-live="assertive">
    <h5 class="box-message__title">This is some title</h5>
    <div class="box-message__content">
      <p class="paragraph">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </div>
    <div class="box-message__buttons">
      <button class="button button--quiet" type="button">
        <span class="button__text">Cancel</span>
      </button>
      <button class="button button--warning" type="button">
        <span class="button__text">Apply</span>
      </button>
    </div>
    <button
      class="box-message__remove-button icon-button icon-button--xs
      icon-button--remove"
      title="Remove notification"
      type="button"
      aria-label="close"
    ></button>
  </div>`,
};

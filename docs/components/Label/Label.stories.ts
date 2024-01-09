export default {
  title: "Components/Label",
};

export const Basic = {
  render: () => `
    <div class="d-flex sbdocs-gap--lg">
      <span class="label">Label as span</span>
      <label for="story" class="label">Label as label</label>
    </div>
  `,
};

export const Sizes = {
  render: () => `
    <div class="d-flex align-items-center sbdocs-gap--sm">
      <span class="label label--xxs">Label</span>
      <span class="label label--xs">Label</span>
      <span class="label label--sm">Label</span>
      <span class="label label--md">Label</span>
      <span class="label label--lg">Label</span>
      <span class="label label--xl">Label</span>
    </div>
  `,
};

export const Wrapper = {
  render: () => `
    <div class="d-flex align-items-end sbdocs-gap--md">
      <label class="label label--wrapper">
        Label
        <input class="input input--md-max-width" name="inputId" type="text" />
      </label>
      <label class="label label--wrapper label--left">
        Label
        <input class="input input--md-max-width" name="inputId" type="text" />
      </label>
      <label class="label label--wrapper label--right">
        Label
        <input class="input input--md-max-width" name="inputId" type="text" />
      </label>
    </div>
  `,
};

export const Required = {
  render: () => `
    <span class="label label--required">Label</span>
  `,
};

export const Truncate = {
  render: () => `
  <div style="width: 30rem">
    <span
      class="label label--truncate"
      title="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.
    </span>
  </div>
  `,
};

export const Hide = {
  render: () => `
    <span class="label label--hide">Label</span>
  `,
};

export default {
  title: "Components/Button",
};

export const Basic = {
  render: () => `<button type="button" class="button">
        <span class="button__text">Click me</span>
    </button>`,
};

export const Icon = {
  render: () => `<button type="button" class="button">
        <i class="button__icon gi-check_thick" aria-hidden="true"></i>
        <span class="button__text">Button with icon</span>
    </button>`,
};

export const Sizes = {
  render: () => `<button type="button" class="button button--sm">
        <span class="button__text">Click me</span>
    </button>
    <button type="button" class="button button--md">
        <span class="button__text">Click me</span>
    </button>
    <button type="button" class="button button--lg">
        <span class="button__text">Click me</span>
    </button>`,
};

export const FullWidth = {
  render: () => `
    <button type="button" class="button button--wide">
      <span class="button__text">Click me</span>
    </button>
  `,
};

export const BoldIcon = {
  render: () => `
    <button type="button" class="button">
      <i class="button__icon button__icon--bold gi-check_thick" aria-hidden="true"></i>
      <span class="button__text">Bold icon</span>
    </button>
  `,
};

export const IconPosition = {
  render: () => `
    <button type="button" class="button">
      <i class="button__icon button__icon--left gi-check_thick" aria-hidden="true"></i>
      <span class="button__text">Icon to the left</span>
    </button>
    <button type="button" class="button">
      <span class="button__text">Icon to the right</span>
      <i class="button__icon button__icon--right gi-check_thick" aria-hidden="true"></i>
    </button>
  `,
};

export const HighHierarchy = {
  render: () => `
    <button type="button" class="button button--accent-high">
      <span class="button__text">Accent high</span>
    </button>
    <button type="button" class="button button--accent">
      <span class="button__text">Accent</span>
    </button>
  `,
};

export const LowHierarchy = {
  render: () => `
    <button type="button" class="button button--neutral">
      <span class="button__text">Neutral</span>
    </button>
    <button type="button" class="button button--quiet">
      <span class="button__text">Quiet</span>
    </button>
    <div style="background-color: #cfcfff; display: inline-flex; padding: 1rem">
      <button type="button" class="button button--blend-base">
        <span class="button__text">Blend base</span>
      </button>
    </div>
    <div style="background-color: #0d0d50; display: inline-flex; padding: 1rem">
      <button type="button" class="button button--blend-inverse">
        <span class="button__text">Blend inverse</span>
      </button>
    </div>
  `,
};

export const Status = {
  render: () => `
    <button type="button" class="button button--error">
      <span class="button__text">Error</span>
    </button>
    <button type="button" class="button button--success">
      <span class="button__text">Success</span>
    </button>
    <button type="button" class="button button--warning">
      <span class="button__text">Warning</span>
    </button>
    <button type="button" class="button button--info">
      <span class="button__text">Info</span>
    </button>
    <button type="button" class="button button--help">
      <span class="button__text">Help</span>
    </button>
  `,
};

export const Disabled = {
  render: () => `
    <button type="button" class="button button--accent button--disabled">
      <span class="button__text">Disabled by class</span>
    </button>
    <button type="button" class="button button--accent" disabled>
      <span class="button__text">Disabled by attribute</span>
    </button>
    <button type="button" class="button button--accent" aria-disabled="true">
      <span class="button__text">Disabled by aria attribute</span>
    </button>
  `,
};

export const BasicStates = {
  render: () => `
    <button type="button" class="button button--accent">
      <span class="button__text">Enabled</span>
    </button>
    <button type="button" class="button button--accent button--hovered">
      <span class="button__text">Hovered</span>
    </button>
    <button type="button" class="button button--accent button--focused">
      <span class="button__text">Focused</span>
    </button>
    <button type="button" class="button button--accent button--pressed">
      <span class="button__text">Pressed</span>
    </button>
  `,
};

export const AdvancedStates = {
  render: () => `
    <button type="button" class="button">
      <span class="button__text">Enabled</span>
    </button>
    <button type="button" class="button button--expanded">
      <span class="button__text">Expanded by class</span>
    </button>
    <button type="button" class="button" aria-expanded="true">
      <span class="button__text">Expanded by aria attribute</span>
    </button>
    <button type="button" class="button button--selected">
      <span class="button__text">Selected by class</span>
    </button>
    <button type="button" class="button" aria-selected="true">
      <span class="button__text">Selected by aria attribute</span>
    </button>
  `,
};

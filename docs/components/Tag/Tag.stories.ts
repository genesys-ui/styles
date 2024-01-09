export default {
  title: "Components/Tag",
};

export const Basic = {
  render: () => `
    <span class="tag">Category</span>
  `,
};

export const Sizes = {
  render: () => `
    <div class="tag-group">
      <span class="tag tag--sm">Category</span>
      <span class="tag tag--md">Category</span>
      <span class="tag tag--lg">Category</span>
    </div>
  `,
};

export const Icon = {
  render: () => `
    <span class="tag">
      <i class="gi-tag_price_sale margin-cmp--right-xs" aria-hidden="true"></i>
      Category
    </span>
  `,
};

export const ColorSchemeBrand = {
  render: () => `
    <div class="tag-group">
      <span class="tag tag--primary">Category</span>
      <span class="tag tag--secondary">Category</span>
    </div>
  `,
};

export const ColorSchemeNeutral = {
  render: () => `
    <div class="tag-group">
      <span class="tag tag--neutral">Category</span>
      <span style="display: inline-block; background-color: #cfcfff; padding: 0.6rem 1.2rem;">
        <span class="tag tag--blend-base">Category</span>
      </span>
      <span style="display: inline-block; background-color: #0d0d50; padding: 0.6rem 1.2rem;">
        <span class="tag tag--blend-inverse">Category</span>
      </span>
    </div>
  `,
};

export const ColorSchemeStatus = {
  render: () => `
    <div class="tag-group">
      <span class="tag tag--error">Category</span>
      <span class="tag tag--help">Category</span>
      <span class="tag tag--info">Category</span>
      <span class="tag tag--success">Category</span>
      <span class="tag tag--warning">Category</span>
    </div>
  `,
};

export const ColorSchemeData = {
  render: () => `
    <div class="tag-group">
      <span class="tag tag--sm tag--data-blue">Category</span>
      <span class="tag tag--sm tag--data-bronze">Category</span>
      <span class="tag tag--sm tag--data-dusk">Category</span>
      <span class="tag tag--sm tag--data-green">Category</span>
      <span class="tag tag--sm tag--data-indigo">Category</span>
      <span class="tag tag--sm tag--data-magenta">Category</span>
      <span class="tag tag--sm tag--data-purple">Category</span>
      <span class="tag tag--sm tag--data-red">Category</span>
      <span class="tag tag--sm tag--data-sky">Category</span>
      <span class="tag tag--sm tag--data-slate">Category</span>
      <span class="tag tag--sm tag--data-teal">Category</span>
    </div>
  `,
};

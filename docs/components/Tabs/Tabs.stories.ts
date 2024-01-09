export default {
  title: "Components/Tabs",
};

export const Basic = {
  render: () => `
    <nav class="tabs__container">
      <ul aria-label="Navigation tabs" class="tabs__content" role="tablist">
        <li
          aria-controls="tab-content-id"
          aria-selected="true"
          class="tabs__item tabs__item--md"
          role="tab"
        >
          <a class="tabs__link tabs__link--md  tabs__link--active" tabindex="0">
            Tab one
          </a>
        </li>
        <li aria-selected="false" class="tabs__item tabs__item--md" role="tab">
          <a class="tabs__link tabs__link--md" tabindex="0">
            Tab two
          </a>
        </li>
        <li aria-selected="false" class="tabs__item tabs__item--md" role="tab">
          <a class="tabs__link tabs__link--md" tabindex="0">
            Tab three
          </a>
        </li>
        <li aria-selected="false" class="tabs__item tabs__item--md" role="tab">
          <a class="tabs__link tabs__link--md tabs__link--disabled" tabindex="-1">
            Tab four
          </a>
        </li>
      </ul>
      <div class="tabs__marker" style="left: 12px; width: 64px;"></div>
    </nav>
  `,
};

export const Contained = {
  render: () => `
    <nav class="tabs__container tabs__container--contained">
      <ul aria-label="Navigation tabs" class="tabs__content" role="tablist">
        <li
          aria-controls="tab-content-id"
          aria-selected="true"
          class="tabs__item tabs__item--md"
          role="tab"
        >
          <a class="tabs__link tabs__link--md  tabs__link--active" tabindex="0">
            Tab one
          </a>
        </li>
        <li aria-selected="false" class="tabs__item tabs__item--md" role="tab">
          <a class="tabs__link tabs__link--md" tabindex="0">
            Tab two
          </a>
        </li>
        <li aria-selected="false" class="tabs__item tabs__item--md" role="tab">
          <a class="tabs__link tabs__link--md" tabindex="0">
            Tab three
          </a>
        </li>
        <li aria-selected="false" class="tabs__item tabs__item--md" role="tab">
          <a class="tabs__link tabs__link--md tabs__link--disabled" tabindex="-1">
            Tab four
          </a>
        </li>
      </ul>
      <div class="tabs__marker" style="left: 12px; width: 64px;"></div>
    </nav>
  `,
};

export const Wide = {
  render: () => `
    <nav class="tabs__container">
      <ul aria-label="Navigation tabs" class="tabs__content" role="tablist">
        <li
          aria-controls="tab-content-id"
          aria-selected="true"
          class="tabs__item tabs__item--md tabs__item--wide"
          role="tab"
        >
          <a class="tabs__link tabs__link--md  tabs__link--active" tabindex="0">
            Tab one
          </a>
        </li>
        <li aria-selected="false" class="tabs__item tabs__item--md tabs__item--wide" role="tab">
          <a class="tabs__link tabs__link--md" tabindex="0">
            Tab two
          </a>
        </li>
        <li aria-selected="false" class="tabs__item tabs__item--md tabs__item--wide" role="tab">
          <a class="tabs__link tabs__link--md" tabindex="0">
            Tab three
          </a>
        </li>
        <li aria-selected="false" class="tabs__item tabs__item--md tabs__item--wide" role="tab">
          <a class="tabs__link tabs__link--md tabs__link--disabled" tabindex="-1">
            Tab four
          </a>
        </li>
      </ul>
      <div class="tabs__marker" style="left: 12px; width: 169px;"></div>
    </nav>
  `,
};

export const Primary = {
  render: () => `
    <nav class="tabs__container">
      <ul aria-label="Navigation tabs" class="tabs__content" role="tablist">
        <li
          aria-controls="tab-content-id"
          aria-selected="true"
          class="tabs__item tabs__item--md"
          role="tab"
        >
          <a class="tabs__link tabs__link--md  tabs__link--active" tabindex="0">
            Tab one
          </a>
        </li>
        <li aria-selected="false" class="tabs__item tabs__item--md" role="tab">
          <a class="tabs__link tabs__link--md" tabindex="0">
            Tab two
          </a>
        </li>
        <li aria-selected="false" class="tabs__item tabs__item--md" role="tab">
          <a class="tabs__link tabs__link--md" tabindex="0">
            Tab three
          </a>
        </li>
        <li aria-selected="false" class="tabs__item tabs__item--md" role="tab">
          <a class="tabs__link tabs__link--md tabs__link--disabled" tabindex="-1">
            Tab four
          </a>
        </li>
      </ul>
      <div class="tabs__marker tabs__marker--primary" style="left: 12px; width: 64px;"></div>
    </nav>
  `,
};

export const Sizes = {
  render: () => `
    <nav class="tabs__container">
      <ul aria-label="Navigation tabs" class="tabs__content" role="tablist">
        <li
          aria-controls="tab-content-id"
          aria-selected="true"
          class="tabs__item tabs__item--sm"
          role="tab"
        >
          <a class="tabs__link tabs__link--sm  tabs__link--active" tabindex="0">
            Tab one
          </a>
        </li>
        <li aria-selected="false" class="tabs__item tabs__item--sm" role="tab">
          <a class="tabs__link tabs__link--sm" tabindex="0">
            Tab two
          </a>
        </li>
        <li aria-selected="false" class="tabs__item tabs__item--sm" role="tab">
          <a class="tabs__link tabs__link--sm" tabindex="0">
            Tab three
          </a>
        </li>
        <li aria-selected="false" class="tabs__item tabs__item--sm" role="tab">
          <a class="tabs__link tabs__link--sm tabs__link--disabled" tabindex="-1">
            Tab four
          </a>
        </li>
      </ul>
      <div class="tabs__marker" style="left: 12px; width: 64px;"></div>
    </nav>
    <nav class="tabs__container">
      <ul aria-label="Navigation tabs" class="tabs__content" role="tablist">
        <li
          aria-controls="tab-content-id"
          aria-selected="true"
          class="tabs__item tabs__item--md"
          role="tab"
        >
          <a class="tabs__link tabs__link--md  tabs__link--active" tabindex="0">
            Tab one
          </a>
        </li>
        <li aria-selected="false" class="tabs__item tabs__item--md" role="tab">
          <a class="tabs__link tabs__link--md" tabindex="0">
            Tab two
          </a>
        </li>
        <li aria-selected="false" class="tabs__item tabs__item--md" role="tab">
          <a class="tabs__link tabs__link--md" tabindex="0">
            Tab three
          </a>
        </li>
        <li aria-selected="false" class="tabs__item tabs__item--md" role="tab">
          <a class="tabs__link tabs__link--md tabs__link--disabled" tabindex="-1">
            Tab four
          </a>
        </li>
      </ul>
      <div class="tabs__marker" style="left: 12px; width: 64px;"></div>
    </nav>
    <nav class="tabs__container">
      <ul aria-label="Navigation tabs" class="tabs__content" role="tablist">
        <li
          aria-controls="tab-content-id"
          aria-selected="true"
          class="tabs__item tabs__item--lg"
          role="tab"
        >
          <a class="tabs__link tabs__link--lg  tabs__link--active" tabindex="0">
            Tab one
          </a>
        </li>
        <li aria-selected="false" class="tabs__item tabs__item--lg" role="tab">
          <a class="tabs__link tabs__link--lg" tabindex="0">
            Tab two
          </a>
        </li>
        <li aria-selected="false" class="tabs__item tabs__item--lg" role="tab">
          <a class="tabs__link tabs__link--lg" tabindex="0">
            Tab three
          </a>
        </li>
        <li aria-selected="false" class="tabs__item tabs__item--lg" role="tab">
          <a class="tabs__link tabs__link--lg tabs__link--disabled" tabindex="-1">
            Tab four
          </a>
        </li>
      </ul>
      <div class="tabs__marker" style="left: 12px; width: 64px;"></div>
    </nav>
  `,
};

export const TabsItemBase = {
  render: () => `
    <div
      aria-controls="tab-content-id"
      aria-selected="false"
      class="tabs__item"
      role="tab"
    >
      <a class="tabs__link" tabindex="0">Tab item</a>
    </div>
  `,
};

export const TabsItemIcon = {
  render: () => `
    <div
      aria-controls="tab-content-id"
      aria-selected="false"
      class="tabs__item tabs__item--md"
      role="tab"
    >
      <a class="tabs__link tabs__link--md" tabindex="0">
        <i class="gi-check_thick margin-cmp--right-xs" aria-hidden="true"></i>
        Tab item
      </a>
    </div>
  `,
};

export const TabsItemRemove = {
  render: () => `
    <div
      aria-controls="tab-content-id"
      aria-selected="false"
      class="tabs__item tabs__item--md"
      role="tab"
    >
      <a class="tabs__link tabs__link--md" tabindex="0">
        Tab item
        <button
          class="icon-button icon-button--remove icon-button--xs margin-cmp--left-xs"
          title="Close tab"
          type="button"
        ></button>
      </a>
    </div>
  `,
};

export const TabsItemIconAndRemove = {
  render: () => `
  <div
    aria-controls="tab-content-id"
    aria-selected="false"
    class="tabs__item tabs__item--md"
    role="tab"
  >
    <a class="tabs__link tabs__link--md" tabindex="0">
      <i class="gi-check_thick margin-cmp--right-xs" aria-hidden="true"></i>
      Tab item
      <button
        class="icon-button icon-button--remove icon-button--xs margin-cmp--left-xs"
        title="Close tab"
        type="button"
      ></button>
    </a>
  </div>
  `,
};

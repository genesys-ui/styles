export default {
  title: "Components/Link",
};

export const Basic = {
  render: () => `
    <a class="link" href="https://www.devo.com/" rel="noreferrer" target="_blank">
      Link
    </a>
  `,
};

export const Sizes = {
  render: () => `
    <div class="d-flex align-items-center sbdocs-gap--sm">
      <a
        class="link link--xs"
        href="https://www.devo.com/"
        rel="noreferrer"
        target="_blank"
      >
        Link
      </a>
      <a
        class="link link--sm"
        href="https://www.devo.com/"
        rel="noreferrer"
        target="_blank"
      >
        Link
      </a>
      <a
        class="link link--md"
        href="https://www.devo.com/"
        rel="noreferrer"
        target="_blank"
      >
        Link
      </a>
      <a
        class="link link--lg"
        href="https://www.devo.com/"
        rel="noreferrer"
        target="_blank"
      >
        Link
      </a>
    </div>
  `,
};

export const Disabled = {
  render: () => `
    <a
      class="link"
      rel="noreferrer"
      role="link"
      tabindex="-1"
      aria-disabled="true"
    >
      Link
    </a>
  `,
};

export const States = {
  render: () => `
    <div class="d-flex align-items-center sbdocs-gap--sm">
      <a
        class="link link--hovered"
        href="https://www.devo.com/"
        rel="noreferrer"
        target="_blank"
      >
        Hover
      </a>
      <a
        class="link link--focused"
        href="https://www.devo.com/"
        rel="noreferrer"
        target="_blank"
      >
        Focus
      </a>
      <a
        class="link link--focused-visible"
        href="https://www.devo.com/"
        rel="noreferrer"
        target="_blank"
      >
        Focus-visible
      </a>
    </div>
  `,
};

export const LowHierarchy = {
  render: () => `
    <div class="d-flex align-items-center sbdocs-gap--sm">
      <a
        class="link link--base"
        href="https://www.devo.com/"
        rel="noreferrer"
        target="_blank"
      >
        Link
      </a>
      <div style="background-color: #0d0d50; padding: 1rem;">
        <a
          class="link link--inverse"
          href="https://www.devo.com/"
          rel="noreferrer"
          target="_blank"
        >
          Link
        </a>
      </div>
    </div>
  `,
};

export const Status = {
  render: () => `
    <div class="d-flex align-items-center sbdocs-gap--sm">
      <a
        class="link link--error"
        href="https://www.devo.com/"
        rel="noreferrer"
        target="_blank"
      >
        Link
      </a>
      <a
        class="link link--help"
        href="https://www.devo.com/"
        rel="noreferrer"
        target="_blank"
      >
        Link
      </a>
      <a
        class="link link--info"
        href="https://www.devo.com/"
        rel="noreferrer"
        target="_blank"
      >
        Link
      </a>
      <a
        class="link link--success"
        href="https://www.devo.com/"
        rel="noreferrer"
        target="_blank"
      >
        Link
      </a>
      <a
        class="link link--warning"
        href="https://www.devo.com/"
        rel="noreferrer"
        target="_blank"
      >
        Link
      </a>
    </div>
  `,
};

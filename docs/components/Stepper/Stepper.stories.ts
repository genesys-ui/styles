export default {
  title: "Components/Stepper",
};

export const Basic = {
  render: () => `
    <ol aria-label="progress" class="stepper">
      <li aria-label="Step one completed" class="stepper__item">
        <span class="badge badge--sm badge--success gi-check_thick"></span>
        <span class="stepper__hidden-status">Completed: </span>
        <span class="stepper__label">Step one</span>
      </li>
      <li
        aria-label="Step two current"
        class="stepper__item stepper__item--active"
      >
        <i
          class="stepper__separator"
          aria-hidden="true"
          aria-label="steps separator"
          role="img"
        ></i>
        <span class="badge badge--sm badge--secondary badge--is-inverse">2</span>
        <span class="stepper__hidden-status">Current: </span>
        <span class="stepper__label">Step two</span>
      </li>
      <li aria-label="Step three pending" class="stepper__item">
        <i
          class="stepper__separator"
          aria-hidden="true"
          aria-label="steps separator"
          role="img"
        ></i>
        <span class="badge badge--sm badge--neutral">3</span>
        <span class="stepper__hidden-status">Pending: </span>
        <span class="stepper__label">Step three</span>
      </li>
      <li
        aria-label="Step four disabled"
        class="stepper__item stepper__item--disabled"
      >
        <i
          class="stepper__separator"
          aria-hidden="true"
          aria-label="steps separator"
          role="img"
        ></i>
        <span class="badge badge--sm badge--neutral">4</span>
        <span class="stepper__hidden-status">Pending: </span>
        <span class="stepper__label">Step four</span>
      </li>
    </ol>
  `,
};

export const Sizes = {
  render: () => `
    <div class="d-flex flex-column sbdocs-gap--md">
      <ol aria-label="progress" class="stepper stepper--sm">
        <li aria-label="Step one completed" class="stepper__item">
          <span class="badge badge--sm badge--success gi-check_thick"></span>
          <span class="stepper__hidden-status">Completed: </span>
          <span class="stepper__label">Step one</span>
        </li>
        <li
          aria-label="Step two current"
          class="stepper__item stepper__item--active"
        >
          <i
            class="stepper__separator"
            aria-hidden="true"
            aria-label="steps separator"
            role="img"
          ></i>
          <span class="badge badge--sm badge--secondary badge--is-inverse">2</span>
          <span class="stepper__hidden-status">Current: </span>
          <span class="stepper__label">Step two</span>
        </li>
        <li aria-label="Step three pending" class="stepper__item">
          <i
            class="stepper__separator"
            aria-hidden="true"
            aria-label="steps separator"
            role="img"
          ></i>
          <span class="badge badge--sm badge--neutral">3</span>
          <span class="stepper__hidden-status">Pending: </span>
          <span class="stepper__label">Step three</span>
        </li>
        <li
          aria-label="Step four disabled"
          class="stepper__item stepper__item--disabled"
        >
          <i
            class="stepper__separator"
            aria-hidden="true"
            aria-label="steps separator"
            role="img"
          ></i>
          <span class="badge badge--sm badge--neutral">4</span>
          <span class="stepper__hidden-status">Pending: </span>
          <span class="stepper__label">Step four</span>
        </li>
      </ol>
      <ol aria-label="progress" class="stepper stepper--md">
        <li aria-label="Step one completed" class="stepper__item">
          <span class="badge badge--md badge--success gi-check_thick"></span>
          <span class="stepper__hidden-status">Completed: </span>
          <span class="stepper__label">Step one</span>
        </li>
        <li
          aria-label="Step two current"
          class="stepper__item stepper__item--active"
        >
          <i
            class="stepper__separator"
            aria-hidden="true"
            aria-label="steps separator"
            role="img"
          ></i>
          <span class="badge badge--md badge--secondary badge--is-inverse">2</span>
          <span class="stepper__hidden-status">Current: </span>
          <span class="stepper__label">Step two</span>
        </li>
        <li aria-label="Step three pending" class="stepper__item">
          <i
            class="stepper__separator"
            aria-hidden="true"
            aria-label="steps separator"
            role="img"
          ></i>
          <span class="badge badge--md badge--neutral">3</span>
          <span class="stepper__hidden-status">Pending: </span>
          <span class="stepper__label">Step three</span>
        </li>
        <li
          aria-label="Step four disabled"
          class="stepper__item stepper__item--disabled"
        >
          <i
            class="stepper__separator"
            aria-hidden="true"
            aria-label="steps separator"
            role="img"
          ></i>
          <span class="badge badge--md badge--neutral">4</span>
          <span class="stepper__hidden-status">Pending: </span>
          <span class="stepper__label">Step four</span>
        </li>
      </ol>
      <ol aria-label="progress" class="stepper stepper--lg">
        <li aria-label="Step one completed" class="stepper__item">
          <span class="badge badge--lg badge--success gi-check_thick"></span>
          <span class="stepper__hidden-status">Completed: </span>
          <span class="stepper__label">Step one</span>
        </li>
        <li
          aria-label="Step two current"
          class="stepper__item stepper__item--active"
        >
          <i
            class="stepper__separator"
            aria-hidden="true"
            aria-label="steps separator"
            role="img"
          ></i>
          <span class="badge badge--lg badge--secondary badge--is-inverse">2</span>
          <span class="stepper__hidden-status">Current: </span>
          <span class="stepper__label">Step two</span>
        </li>
        <li aria-label="Step three pending" class="stepper__item">
          <i
            class="stepper__separator"
            aria-hidden="true"
            aria-label="steps separator"
            role="img"
          ></i>
          <span class="badge badge--lg badge--neutral">3</span>
          <span class="stepper__hidden-status">Pending: </span>
          <span class="stepper__label">Step three</span>
        </li>
        <li
          aria-label="Step four disabled"
          class="stepper__item stepper__item--disabled"
        >
          <i
            class="stepper__separator"
            aria-hidden="true"
            aria-label="steps separator"
            role="img"
          ></i>
          <span class="badge badge--lg badge--neutral">4</span>
          <span class="stepper__hidden-status">Pending: </span>
          <span class="stepper__label">Step four</span>
        </li>
      </ol>
    </div>
  `,
};

export const StatusCompleted = {
  render: () => `
    <ol aria-label="progress" class="stepper stepper--sm">
      <li aria-label="Step one completed" class="stepper__item">
        <span class="badge badge--sm badge--success gi-check_thick"></span>
        <span class="stepper__hidden-status">Completed: </span>
        <span class="stepper__label">Step one</span>
      </li>
    </ol>
  `,
};

export const StatusCurrent = {
  render: () => `
    <ol aria-label="progress" class="stepper stepper--md">
      <li
        aria-label="Step two current"
        class="stepper__item stepper__item--active"
      >
        <span class="badge badge--sm badge--secondary badge--is-inverse">2</span>
        <span class="stepper__hidden-status">Current: </span>
        <span class="stepper__label">Step two</span>
      </li>
    </ol>
  `,
};

export const StatusPending = {
  render: () => `
    <ol aria-label="progress" class="stepper stepper--lg">
      <li aria-label="Step three pending" class="stepper__item">
        <span class="badge badge--sm badge--neutral">3</span>
        <span class="stepper__hidden-status">Pending: </span>
        <span class="stepper__label">Step three</span>
      </li>
    </ol>
  `,
};

export const StatusDisabled = {
  render: () => `
    <ol aria-label="progress" class="stepper stepper--lg">
      <li
        aria-label="Step four disabled"
        class="stepper__item stepper__item--disabled"
      >
        <span class="badge badge--sm badge--neutral">4</span>
        <span class="stepper__hidden-status">Disabled: </span>
        <span class="stepper__label">Step four</span>
      </li>
    </ol>
  `,
};

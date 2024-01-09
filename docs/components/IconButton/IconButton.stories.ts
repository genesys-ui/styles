export default {
  title: "Components/IconButton",
};

export const Basic = {
  render: () => `
    <button type="button" class="icon-button">
      <i class="icon-button__icon gi-reload_refresh_update" aria-hidden="true"></i>
    </button>
  `,
};

export const Sizes = {
  render: () => `
    <button type="button" class="icon-button icon-button--xxs">
      <i class="icon-button__icon gi-reload_refresh_update" aria-hidden="true"></i>
    </button>
    <button type="button" class="icon-button icon-button--xs">
      <i class="icon-button__icon gi-reload_refresh_update" aria-hidden="true"></i>
    </button>
    <button type="button" class="icon-button icon-button--sm">
      <i class="icon-button__icon gi-reload_refresh_update" aria-hidden="true"></i>
    </button>
    <button type="button" class="icon-button icon-button--md">
      <i class="icon-button__icon gi-reload_refresh_update" aria-hidden="true"></i>
    </button>
    <button type="button" class="icon-button icon-button--lg">
      <i class="icon-button__icon gi-reload_refresh_update" aria-hidden="true"></i>
    </button>            
  `,
};

export const FullWidth = {
  render: () => `
    <button type="button" class="icon-button icon-button--wide">
      <i class="icon-button__icon gi-reload_refresh_update" aria-hidden="true"></i>
    </button>              
  `,
};

export const Circular = {
  render: () => `
    <button type="button" class="icon-button icon-button--circular">
      <i class="icon-button__icon gi-reload_refresh_update" aria-hidden="true"></i>
    </button>              
  `,
};

export const BoldIcon = {
  render: () => `
    <button type="button" class="icon-button icon-button--bold">
      <i class="icon-button__icon gi-reload_refresh_update" aria-hidden="true"></i>
    </button>              
  `,
};

export const HighHierarchy = {
  render: () => `
    <button type="button" class="icon-button icon-button--accent-high">
      <i class="icon-button__icon gi-reload_refresh_update" aria-hidden="true"></i>
    </button>
    <button type="button" class="icon-button icon-button--accent">
      <i class="icon-button__icon gi-reload_refresh_update" aria-hidden="true"></i>
    </button>                  
  `,
};

export const LowHierarchy = {
  render: () => `
    <button type="button" class="icon-button icon-button--neutral">
      <i class="icon-button__icon gi-reload_refresh_update" aria-hidden="true"></i>
    </button>
    <button type="button" class="icon-button icon-button--quiet">
      <i class="icon-button__icon gi-reload_refresh_update" aria-hidden="true"></i>
    </button>
    <div style="background-color: #cfcfff; display: inline-flex; padding: 1rem">
      <button type="button" class="icon-button icon-button--blend-base">
        <i class="icon-button__icon gi-reload_refresh_update" aria-hidden="true"></i>
      </button>
    </div>
    <div style="background-color: #0d0d50; display: inline-flex; padding: 1rem">
      <button type="button" class="icon-button icon-button--blend-inverse">
        <i class="icon-button__icon gi-reload_refresh_update" aria-hidden="true"></i>
      </button>
    </div>
  `,
};

export const Status = {
  render: () => `
    <button type="button" class="icon-button icon-button--error">
      <i class="icon-button__icon gi-reload_refresh_update" aria-hidden="true"></i>
    </button>
    <button type="button" class="icon-button icon-button--success">
      <i class="icon-button__icon gi-reload_refresh_update" aria-hidden="true"></i>
    </button>
    <button type="button" class="icon-button icon-button--warning">
      <i class="icon-button__icon gi-reload_refresh_update" aria-hidden="true"></i>
    </button>
    <button type="button" class="icon-button icon-button--help">
      <i class="icon-button__icon gi-reload_refresh_update" aria-hidden="true"></i>
    </button> 
    <button type="button" class="icon-button icon-button--info">
      <i class="icon-button__icon gi-reload_refresh_update" aria-hidden="true"></i>
    </button>                      
  `,
};

export const Disabled = {
  render: () => `
    <span>Disabled by class</span>
    <button type="button" class="icon-button icon-button--accent icon-button--disabled">
      <i class="icon-button__icon gi-reload_refresh_update" aria-hidden="true"></i>
    </button>
    <span class="sbdocs-spacer sbdocs-spacer--hor sbdocs-spacer--sm"></span>
    <span>Disabled by attribute</span>
    <button type="button" class="icon-button icon-button--accent" disabled>
      <i class="icon-button__icon gi-reload_refresh_update" aria-hidden="true"></i>
    </button>
    <span class="sbdocs-spacer sbdocs-spacer--hor sbdocs-spacer--sm"></span>
    <span>Disabled by aria attribute</span>    
    <button type="button" class="icon-button icon-button--accent" aria-disabled="true">
      <i class="icon-button__icon gi-reload_refresh_update" aria-hidden="true"></i>
    </button>
  `,
};

export const BasicStates = {
  render: () => `
    <span>Enabled</span>
    <button type="button" class="icon-button">
      <i class="icon-button__icon gi-reload_refresh_update" aria-hidden="true"></i>
    </button>
    <span class="sbdocs-spacer sbdocs-spacer--hor sbdocs-spacer--sm"></span>
    <span>Hovered</span>
    <button type="button" class="icon-button icon-button--hovered">
      <i class="icon-button__icon gi-reload_refresh_update" aria-hidden="true"></i>
    </button>
    <span class="sbdocs-spacer sbdocs-spacer--hor sbdocs-spacer--sm"></span>
    <span>Focused</span>    
    <button type="button" class="icon-button icon-button--focused">
      <i class="icon-button__icon gi-reload_refresh_update" aria-hidden="true"></i>
    </button>
    <span class="sbdocs-spacer sbdocs-spacer--hor sbdocs-spacer--sm"></span>
    <small>Pressed</small>    
    <button type="button" class="icon-button icon-button--pressed">
      <i class="icon-button__icon gi-reload_refresh_update" aria-hidden="true"></i>
    </button>
  `,
};

export const AdvancedStates = {
  render: () => `
    <span class="sbdocs-p">Enabled</span>
    <button type="button" class="icon-button">
      <i class="icon-button__icon gi-reload_refresh_update" aria-hidden="true"></i>
    </button>
    <span class="sbdocs-spacer sbdocs-spacer--hor sbdocs-spacer--sm"></span>
    <span>Expanded by class</span>
    <button type="button" class="icon-button icon-button--expanded">
      <i class="icon-button__icon gi-reload_refresh_update" aria-hidden="true"></i>
    </button>
    <span class="sbdocs-spacer sbdocs-spacer--hor sbdocs-spacer--sm"></span>
    <span>Expanded by aria attribute</span>
    <button type="button" class="icon-button" aria-expanded="true">
      <i class="icon-button__icon gi-reload_refresh_update" aria-hidden="true"></i>
    </button>
    <span class="sbdocs-spacer sbdocs-spacer--hor sbdocs-spacer--sm"></span>
    <span>Selected by class</span>
    <button type="button" class="icon-button icon-button--selected">
      <i class="icon-button__icon gi-reload_refresh_update" aria-hidden="true"></i>
    </button>
    <span class="sbdocs-spacer sbdocs-spacer--hor sbdocs-spacer--sm"></span>
    <span>Selected by aria attribute</span>
    <button type="button" class="icon-button" aria-selected="true">
      <i class="icon-button__icon gi-reload_refresh_update" aria-hidden="true"></i>
    </button>
  `,
};

export const CaseStatus = {
  render: () => `
    <button type="button" class="icon-button icon-button--status icon-button--error">
      <i class="icon-button__icon gi-reload_refresh_update" aria-hidden="true"></i>
    </button>
    <button type="button" class="icon-button icon-button--status icon-button--success">
      <i class="icon-button__icon gi-reload_refresh_update" aria-hidden="true"></i>
    </button>
    <button type="button" class="icon-button icon-button--status icon-button--warning">
      <i class="icon-button__icon gi-reload_refresh_update" aria-hidden="true"></i>
    </button>
    <button type="button" class="icon-button icon-button--status icon-button--help">
      <i class="icon-button__icon gi-reload_refresh_update" aria-hidden="true"></i>
    </button> 
    <button type="button" class="icon-button icon-button--status icon-button--info">
      <i class="icon-button__icon gi-reload_refresh_update" aria-hidden="true"></i>
    </button>                      
  `,
};

export const CaseClose = {
  render: () => `
    <button type="button" class="icon-button icon-button--close icon-button--xxs"></button>
    <button type="button" class="icon-button icon-button--close icon-button--xs"></button>
    <button type="button" class="icon-button icon-button--close icon-button--sm"></button>
    <button type="button" class="icon-button icon-button--close icon-button--md"></button>
    <button type="button" class="icon-button icon-button--close icon-button--lg"></button>
  `,
};

export const CaseCollapse = {
  render: () => `
    <button type="button" class="icon-button icon-button--collapse icon-button--xxs"></button>
    <button type="button" class="icon-button icon-button--collapse icon-button--xs"></button>
    <button type="button" class="icon-button icon-button--collapse icon-button--sm"></button>
    <button type="button" class="icon-button icon-button--collapse icon-button--md"></button>
    <button type="button" class="icon-button icon-button--collapse icon-button--lg"></button>
  `,
};

export const CaseRemove = {
  render: () => `
    <button type="button" class="icon-button icon-button--remove icon-button--xxs"></button>
    <button type="button" class="icon-button icon-button--remove icon-button--xs"></button>
    <button type="button" class="icon-button icon-button--remove icon-button--sm"></button>
    <button type="button" class="icon-button icon-button--remove icon-button--md"></button>
    <button type="button" class="icon-button icon-button--remove icon-button--lg"></button>
  `,
};

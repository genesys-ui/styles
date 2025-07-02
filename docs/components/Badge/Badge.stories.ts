export default {
  title: "Components/Badge",
};

export const Basic = {
  render: () => `<span class="badge">42</span>`,
};

export const Sizes = {
  render: () => `
<span class="badge badge--sm">42</span>
<span class="badge badge--md">42</span>
<span class="badge badge--lg">42</span>
  `,
};

export const Icon = {
  render: () => `
<span class="badge badge--has-icon badge--sm gi-info"></span>
<span class="badge badge--has-icon badge--md gi-bell_ringer_alarm_sound_solid"></span>
<span class="badge badge--has-icon badge--lg gi-check_thick"></span>
  `,
};

export const IsEmpty = {
  render: () => `
<span class="badge badge--empty badge--sm"></span>
<span class="badge badge--empty badge--md"></span>
<span class="badge badge--empty badge--lg"></span>
  `,
};

export const IsCircular = {
  render: () => `
<span class="badge badge--circular badge--sm">42</span>
<span class="badge badge--circular badge--md">42</span>
<span class="badge badge--circular badge--lg">42</span>
  `,
};

export const TruncatedText = {
  render: () => `
<span class="badge badge--error" style="max-width: 5.4rem">
  <span class="truncated" title="Long text to be truncated">Long text to be truncated</span>
</span>
  `,
};

export const ColorSchemeHighHierarchy = {
  render: () => `
<span class="badge badge--sm badge--primary">42</span>
<span class="badge badge--sm badge--secondary">42</span>
  `,
};

export const ColorSchemeLowHierarchy = {
  render: () => `
<div class="d-flex ai--center sbdocs-gap--sm">
<span class="badge badge--sm badge--neutral">42</span>
<div style="background-color: #cfcfff; padding: 0.6rem 1.2rem;">
  <span class="badge badge--sm badge--blend-base">42</span>
</div>
<div style="background-color: #0d0d50; padding: 0.6rem 1.2rem;">
  <span class="badge badge--sm badge--blend-inverse">42</span>
</div>
</div>
  `,
};

export const Status = {
  render: () => `
<span class="badge badge--sm badge--error">42</span>
<span class="badge badge--sm badge--help">42</span>
<span class="badge badge--sm badge--info">42</span>
<span class="badge badge--sm badge--success">42</span>
<span class="badge badge--sm badge--warning">42</span>
  `,
};

export const DataVisualization = {
  render: () => `
<span class="badge badge--sm badge--data-blue">42</span>
<span class="badge badge--sm badge--data-bronze">42</span>
<span class="badge badge--sm badge--data-dusk">42</span>
<span class="badge badge--sm badge--data-green">42</span>
<span class="badge badge--sm badge--data-indigo">42</span>
<span class="badge badge--sm badge--data-magenta">42</span>
<span class="badge badge--sm badge--data-purple">42</span>
<span class="badge badge--sm badge--data-red">42</span>
<span class="badge badge--sm badge--data-sky">42</span>
<span class="badge badge--sm badge--data-slate">42</span>
<span class="badge badge--sm badge--data-teal">42</span>
  `,
};

export const InverseHighHierarchy = {
  render: () => `
<span class="badge badge--sm badge--is-inverse badge--primary">42</span>
<span class="badge badge--sm badge--is-inverse badge--secondary">42</span>
  `,
};

export const InverseLowHierarchy = {
  render: () => `
<span class="badge badge--sm badge--is-inverse badge--neutral">42</span>
<div style={{ backgroundColor: '#cfcfff', padding: '0.6rem 1.2rem' }}>
  <span class="badge badge--sm badge--is-inverse badge--blend-base">42</span>
</div>
<div style={{ backgroundColor: '#0d0d50', padding: '0.6rem 1.2rem' }}>
  <span class="badge badge--sm badge--is-inverse badge--blend-inverse">42</span>
</div>
  `,
};

export const InverseStatus = {
  render: () => `
<span class="badge badge--sm badge--is-inverse badge--error">42</span>
<span class="badge badge--sm badge--is-inverse badge--help">42</span>
<span class="badge badge--sm badge--is-inverse badge--info">42</span>
<span class="badge badge--sm badge--is-inverse badge--success">42</span>
<span class="badge badge--sm badge--is-inverse badge--warning">42</span>
  `,
};

export const InverseDataVisualization = {
  render: () => `
<span class="badge badge--sm badge--is-inverse badge--data-blue">42</span>
<span class="badge badge--sm badge--is-inverse badge--data-bronze">42</span>
<span class="badge badge--sm badge--is-inverse badge--data-dusk">42</span>
<span class="badge badge--sm badge--is-inverse badge--data-green">42</span>
<span class="badge badge--sm badge--is-inverse badge--data-indigo">42</span>
<span class="badge badge--sm badge--is-inverse badge--data-magenta">42</span>
<span class="badge badge--sm badge--is-inverse badge--data-purple">42</span>
<span class="badge badge--sm badge--is-inverse badge--data-red">42</span>
<span class="badge badge--sm badge--is-inverse badge--data-sky">42</span>
<span class="badge badge--sm badge--is-inverse badge--data-slate">42</span>
<span class="badge badge--sm badge--is-inverse badge--data-teal">42</span>
  `,
};

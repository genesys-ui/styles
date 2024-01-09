import { ClassesTableProps } from "../components/ClassesTable";

export const LABEL_CLASS_VARIANTS: ClassesTableProps["classVariants"] = [
  {
    selector: ".label",
    description: "Assign the basic styles for the Label component.",
    type: "block",
    restrictions: "label",
  },
  {
    selector:
      ".label--xxs, .label--xs, .label--sm, .label--md, .label--lg, .label--xl",
    description: "Assign sizes styles.",
    type: "modifier",
    restrictions: "label",
  },
  {
    selector: ".label--wrapper",
    description: "Assign wrapper styles.",
    type: "modifier",
    restrictions: "label",
  },
  {
    selector: ".label--required",
    description: "Assign required state styles.",
    type: "modifier",
    restrictions: "label",
  },
  {
    selector: ".label--hide",
    description: "Assign sr-only styles.",
    type: "modifier",
    restrictions: "label",
  },
  {
    selector: ".label--truncate",
    description: "Assign truncated text styles.",
    type: "modifier",
    restrictions: "label",
  },
];

export const VALIDATION_CLASS_VARIANTS: ClassesTableProps["classVariants"] = [
  {
    selector: ".validation",
    description: "Assign the basic styles for the Validation component.",
    type: "block",
    restrictions: "div, p, span",
  },
  {
    selector:
      ".validation--xxs, .validation--xs, .validation--sm, .validation--md, .validation--lg",
    description: "Assign sizes styles.",
    type: "modifier",
    restrictions: "div, p, span",
  },
  {
    selector:
      ".validation--error, .validation--success, .validation--warning, .validation--help, .validation--info",
    description: "Assign status styles.",
    type: "modifier",
    restrictions: "div, p, span",
  },
];

export const HELPER_CLASS_VARIANTS: ClassesTableProps["classVariants"] = [
  {
    selector: ".helper",
    description: "Assign the basic styles for the helper component.",
    type: "block",
    restrictions: "div, p, span",
  },
  {
    selector:
      ".helper--xxs, .helper--xs, .helper--sm, .helper--md, .helper--lg",
    description: "Assign sizes styles.",
    type: "modifier",
    restrictions: "div, p, span",
  },
  {
    selector:
      ".helper--error, .helper--success, .helper--warning, .helper--help, .helper--info",
    description: "Assign status styles.",
    type: "modifier",
    restrictions: "div, p, span",
  },
];

export const FORM_FIELD_CLASS_VARIANTS: ClassesTableProps["classVariants"] = [
  {
    selector: ".form",
    description:
      "Assign the distribution styles to the wrapper of several fields.",
    type: "element",
    restrictions: "div, form",
  },
  {
    selector: ".form__field",
    description:
      "Assign the distribution styles to the wrapper of input control, label, helper, validation... etc.",
    type: "element",
    restrictions: "div, span, label",
  },
  {
    selector: ".form__field--hor",
    description:
      "Assign the distribution styles to get the label to the left of the input control instead of above",
    type: "modifier",
    restrictions: "div, span, label",
  },
];

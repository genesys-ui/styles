import * as React from "react";

const headStyles = { width: "20%" };

export interface ClassesTableProps {
  classVariants: {
    description: string;
    restrictions?: string;
    selector: string;
    type: "block" | "element" | "modifier";
  }[];
}

export const ClassesTable: React.FC<ClassesTableProps> = ({
  classVariants,
}) => {
  return (
    <table className="sbdocs sbdocs-table sbdocs-table--reduced">
      <tbody>
        {classVariants.map((classVariant, idx) => (
          <>
            {classVariant?.selector && (
              <tr style={{ borderTop: "none" }} key={`selector-${idx}`}>
                <th style={headStyles}>Selector</th>
                <td>
                  <code>{classVariant.selector}</code>
                </td>
              </tr>
            )}
            {classVariant?.description && (
              <tr key={`description-${idx}`}>
                <th style={headStyles}>Description</th>
                <td>{classVariant.description}</td>
              </tr>
            )}
            {classVariant?.type && (
              <tr key={`type-${idx}`}>
                <th style={headStyles}>Type</th>
                <td>{classVariant.type}</td>
              </tr>
            )}
            {classVariant?.restrictions && (
              <tr key={`restrictions-${idx}`}>
                <th style={headStyles}>Restrictions</th>
                <td>
                  <pre>{classVariant.restrictions}</pre>
                </td>
              </tr>
            )}
            <tr
              key={`spacer-${idx}`}
              style={{ height: "3.2rem", borderTop: "none" }}
            >
              <th colSpan={2}></th>
            </tr>
          </>
        ))}
      </tbody>
    </table>
  );
};

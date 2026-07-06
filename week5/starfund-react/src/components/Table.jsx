import React from 'react';

// ─── Table Component ──────────────────────────────────────────────────────────
//
// Exercise 16 — Reusable <Table headers={[]} rows={[]} /> component
// Renders ANY tabular data — fully generic and reusable.
//
// Props:
//   headers — string[] — column header labels
//   rows    — any[][] — 2D array of cell values (strings, numbers, or JSX)
//   caption — optional table caption
//
// Demonstrates:
//   • .map() with key props on both headers and rows
//   • Accepting any data shape (generic component)
//   • Conditional rendering for empty state

const Table = ({ headers = [], rows = [], caption }) => {
  return (
    <div className="overflow-x-auto rounded-2xl border border-slate-800">
      <table className="w-full text-sm text-left">

        {/* Optional caption */}
        {caption && (
          <caption className="text-xs text-slate-500 py-2 px-4 text-left caption-top border-b border-slate-800 bg-slate-900">
            {caption}
          </caption>
        )}

        {/* Header row */}
        <thead className="bg-slate-900 border-b border-slate-800">
          <tr>
            {headers.map((header, i) => (
              <th
                key={i}
                className="px-4 py-3 text-xs font-bold text-slate-400 uppercase tracking-wider whitespace-nowrap"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>

        {/* Body */}
        <tbody className="bg-slate-950 divide-y divide-slate-900">
          {rows.length > 0 ? (
            rows.map((row, rowIdx) => (
              <tr
                key={rowIdx}
                className="hover:bg-slate-900/60 transition-colors duration-150"
              >
                {row.map((cell, cellIdx) => (
                  <td
                    key={cellIdx}
                    className="px-4 py-3 text-slate-300 whitespace-nowrap"
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))
          ) : (
            // Empty state — conditional rendering
            <tr>
              <td
                colSpan={headers.length || 1}
                className="px-4 py-10 text-center text-slate-500 text-sm"
              >
                No data to display.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;

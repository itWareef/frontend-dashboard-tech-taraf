// export const InvoicePdf = ({ invoiceData }) => {
//   const {
//     companyName,
//     companyNameArabic,
//     invoiceTitle,
//     invoiceTitleArabic,
//     invoiceDate,
//     invoiceNo,
//     companyAddress,
//     companyAddressArabic,
//     companyTel,
//     companyFax,
//     companyVatNo,
//     customerName,
//     customerAddress,
//     customerVatNo,
//     items,
//     totalBeforeVat,
//     discount,
//     totalTaxVat,
//     netTotal,
//     amountInWordsArabic,
//     amountInWordsEnglish,
//     commercialRegistration,
//     commercialRegistrationArabic,
//   } = invoiceData;

//   return (
//     <div className="invoice-pdf">
//       {/* Header Section */}
//       <header className="invoice-header">
//         <div className="company-info">
//           <h1 className="company-name">{companyName}</h1>
//           <h2 className="company-name-arabic">{companyNameArabic}</h2>
//           <p className="company-address">{companyAddress}</p>
//           <p className="company-address-arabic">{companyAddressArabic}</p>
//           <div className="company-contacts">
//             <span>Tel: {companyTel}</span>
//             <span>Fax: {companyFax}</span>
//             <span>VAT: {companyVatNo}</span>
//           </div>
//           <p className="commercial-reg">{commercialRegistration}</p>
//           <p className="commercial-reg-arabic">
//             {commercialRegistrationArabic}
//           </p>
//         </div>

//         <div className="invoice-title">
//           <h1>{invoiceTitle}</h1>
//           <h2>{invoiceTitleArabic}</h2>
//           <div className="invoice-meta">
//             <div>
//               <span>Invoice No:</span>
//               <strong>{invoiceNo}</strong>
//             </div>
//             <div>
//               <span>Invoice Date:</span>
//               <strong>{invoiceDate}</strong>
//             </div>
//           </div>
//         </div>
//       </header>

//       {/* Customer Section */}
//       <section className="customer-section">
//         <h3>Customer Information</h3>
//         <div className="customer-details">
//           <div>
//             <span>Name:</span>
//             <strong>{customerName}</strong>
//           </div>
//           <div>
//             <span>Address:</span>
//             <strong>{customerAddress}</strong>
//           </div>
//           <div>
//             <span>VAT No:</span>
//             <strong>{customerVatNo}</strong>
//           </div>
//         </div>
//       </section>

//       {/* Items Table */}
//       <table className="items-table">
//         <thead>
//           <tr>
//             <th>#</th>
//             <th>Description</th>
//             <th>Qty</th>
//             <th>Unit</th>
//             <th>Unit Price</th>
//             <th>Total</th>
//           </tr>
//         </thead>
//         <tbody>
//           {items.map((item, index) => (
//             <tr key={item.id}>
//               <td>{index + 1}</td>
//               <td>{item.description}</td>
//               <td className="text-center">{item.qty}</td>
//               <td className="text-center">{item.unit}</td>
//               <td className="text-right">{item.price.toFixed(2)}</td>
//               <td className="text-right">{item.totalBeforeVat.toFixed(2)}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       {/* Totals Section */}
//       <section className="totals-section">
//         <div className="totals-grid">
//           <div>
//             <span>Total Before VAT:</span>
//             <strong>{totalBeforeVat.toFixed(2)} SAR</strong>
//           </div>
//           <div>
//             <span>Discount:</span>
//             <strong>{discount.toFixed(2)} SAR</strong>
//           </div>
//           <div>
//             <span>VAT (15%):</span>
//             <strong>{totalTaxVat.toFixed(2)} SAR</strong>
//           </div>
//           <div className="grand-total">
//             <span>Net Total:</span>
//             <strong>{netTotal.toFixed(2)} SAR</strong>
//           </div>
//         </div>

//         <div className="amount-in-words">
//           <p>
//             <span>Amount in words:</span> {amountInWordsEnglish}
//           </p>
//           <p>
//             <span>المبلغ بالحروف:</span> {amountInWordsArabic}
//           </p>
//         </div>
//       </section>

//       {/* Footer Section */}
//       <footer className="invoice-footer">
//         <div className="signature">
//           <p>Authorized Signature</p>
//           <div className="signature-line"></div>
//           <p>التوقيع المعتمد</p>
//         </div>
//         <p className="thank-you">Thank you for your business!</p>
//         <p className="thank-you-arabic">نشكركم على تعاملكم معنا</p>
//       </footer>
//     </div>
//   );
// };

import React from "react";

const InvoicePdf = () => {
  return (
    <section className="InvoicePdf">
      <header>
        <div>
          <p>الرياض-المملكة العربية السعودية</p>
        </div>
      </header>
    </section>
  );
};

export default InvoicePdf;

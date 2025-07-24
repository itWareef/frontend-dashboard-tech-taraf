// import { Download, Eye, Printer } from "lucide-react";
// import { usePDF } from "react-to-pdf";

// const OfferPriceTBody = () => {
//   const { toPDF, targetRef } = usePDF({ filename: "page.pdf" });

//   return (
//     <tbody className="h-[64px]">
//       <tr className="group">
//         <td className="px-2 py-3 text-center text-primary bg-[#C8CCCC] hover:bg-[#B8BCBC] text-sm font-medium whitespace-nowrap transition-colors duration-200 rounded-r-[6px]">
//           125050
//         </td>
//         <td className="px-2 py-3 text-center text-primary bg-[#C8CCCC] hover:bg-[#B8BCBC] text-sm font-medium whitespace-nowrap transition-colors duration-200">
//           عبدالرحمن
//         </td>
//         <td className="px-2 py-3 text-center text-primary bg-[#C8CCCC] hover:bg-[#B8BCBC] text-sm font-medium whitespace-nowrap transition-colors duration-200">
//           21/7/2025
//         </td>
//         <td className="px-2 py-3 text-center text-primary bg-[#C8CCCC] hover:bg-[#B8BCBC] text-sm font-medium whitespace-nowrap transition-colors duration-200">
//           21/7/2025
//         </td>
//         <td className="px-2 py-3 text-center text-primary bg-[#C8CCCC] hover:bg-[#B8BCBC] text-sm font-medium whitespace-nowrap transition-colors duration-200">
//           3000{" "}
//         </td>
//         <td className="px-2 py-3 text-center text-primary bg-[#C8CCCC] hover:bg-[#B8BCBC] text-sm font-medium whitespace-nowrap transition-colors duration-200">
//           icons
//         </td>

//         <td className="w-[100px]">
//           <div className="flex gap-3 h-[64px] border-r-2 border-muted items-center justify-center  rounded-l-[6px] bg-[#C8CCCC] hover:bg-[#B8BCBC] transition-colors duration-200">
//             <Eye />
//             <Download onClick={() => toPDF()} />
//             <div className="hidden" ref={targetRef}>
//               Content to be generated to PDF
//             </div>

//             <Printer />
//           </div>
//         </td>
//       </tr>
//     </tbody>
//   );
// };

// export default OfferPriceTBody;import { useState } from 'react';
import { Download, Eye, Printer } from "lucide-react";
import { usePDF } from "react-to-pdf";
import { useState } from "react";
import "./styles.css";
import InvoicePdf from "./InvoicePdf";

export default function InvoiceTable() {
  const [showPreview, setShowPreview] = useState(false);
  const { toPDF, targetRef } = usePDF({
    filename: "tax-invoice.pdf",
    page: {
      format: "A4",
      orientation: "portrait",
      margin: 10,
    },
  });

  const invoiceData = {
    companyName: "Genius trading systems company",
    companyNameArabic: "شركة النظم العبقرية للتجارة",
    invoiceTitle: "TAX INVOICE",
    invoiceTitleArabic: "فاتورة ضريبية",
    invoiceDate: "2025/06/22",
    invoiceNo: "0072",
    companyAddress: "Riyadh - AlMalaz - Farazdk ST",
    companyAddressArabic: "الرياض - الملز - شارع الفرزدق",
    companyTel: "011-2791043",
    companyFax: "011-4160040",
    companyVatNo: "311129268800003",
    customerName: "شركة مسكن ترف للخدمات العقارية",
    customerAddress:
      "2975 الرياض حي القيروان شارع الامير سعود بن عبدالله بن جلوي 13533 - 9207",
    customerVatNo: "311762158300003",
    items: [
      {
        id: 1,
        description:
          "رسوم تفعيل وربط واتس اب API Business مع نظام بتركس بالاضافة الى بناء هيكلية تشات بوت خاصة",
        qty: 1.0,
        unit: "عدد",
        price: 6002.61,
        totalBeforeVat: 6002.61,
      },
    ],
    totalBeforeVat: 6002.61,
    discount: 0.0,
    totalTaxVat: 900.39,
    netTotal: 6903.0,
    amountInWordsArabic: "فقط ستة آلاف وتسعمائة وثلاثة ريال سعودي",
    amountInWordsEnglish: "Only Six Thousands & Nine Hundred Three Saudi Riyal",
    commercialRegistration: "Commercial Registration:1010817300",
    commercialRegistrationArabic: "رقم السجل التجاري : 1010817300",
  };

  return (
    <>
      <tbody className="h-[64px]">
        <tr className="group">
          <td className="px-2 py-3 text-center text-primary bg-[#C8CCCC] hover:bg-[#B8BCBC] text-sm font-medium whitespace-nowrap transition-colors duration-200 rounded-r-[6px]">
            125050
          </td>
          <td className="px-2 py-3 text-center text-primary bg-[#C8CCCC] hover:bg-[#B8BCBC] text-sm font-medium whitespace-nowrap transition-colors duration-200">
            عبدالرحمن
          </td>
          <td className="px-2 py-3 text-center text-primary bg-[#C8CCCC] hover:bg-[#B8BCBC] text-sm font-medium whitespace-nowrap transition-colors duration-200">
            21/7/2025
          </td>
          <td className="px-2 py-3 text-center text-primary bg-[#C8CCCC] hover:bg-[#B8BCBC] text-sm font-medium whitespace-nowrap transition-colors duration-200">
            21/7/2025
          </td>
          <td className="px-2 py-3 text-center text-primary bg-[#C8CCCC] hover:bg-[#B8BCBC] text-sm font-medium whitespace-nowrap transition-colors duration-200">
            3000{" "}
          </td>
          <td className="px-2 py-3 text-center text-primary bg-[#C8CCCC] hover:bg-[#B8BCBC] text-sm font-medium whitespace-nowrap transition-colors duration-200">
            icons
          </td>

          <td className="w-[100px]">
            <div className="flex gap-3 h-[64px] border-r-2 border-muted items-center justify-center  rounded-l-[6px] bg-[#C8CCCC] hover:bg-[#B8BCBC] transition-colors duration-200">
              <Eye onClick={() => setShowPreview(true)} />
              <Download onClick={() => toPDF()} />
              {/* <div className="hidden" ref={targetRef}>
                Content to be generated to PDF
              </div> */}

              <Printer />
            </div>
          </td>
        </tr>
      </tbody>

      <div id="pdf-content" className="pdf-content-hidden">
        <div ref={targetRef}>
          <InvoicePdf invoiceData={invoiceData} />
        </div>
      </div>

      {/* Preview Modal */}
      {showPreview && (
        <div className="preview-modal-overlay">
          <div className="preview-modal">
            <div className="modal-header">
              <h2>معاينة الفاتورة</h2>
              <button
                onClick={() => setShowPreview(false)}
                className="close-button"
              >
                &times;
              </button>
            </div>
            <div className="modal-content">
              <InvoicePdf invoiceData={invoiceData} />
            </div>
            <div className="modal-footer">
              <button
                onClick={() => {
                  toPDF();
                  setShowPreview(false);
                }}
                className="download-button"
              >
                <Download size={18} />
                <span>تحميل PDF</span>
              </button>
              <button
                onClick={() => setShowPreview(false)}
                className="close-modal-button"
              >
                إغلاق
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

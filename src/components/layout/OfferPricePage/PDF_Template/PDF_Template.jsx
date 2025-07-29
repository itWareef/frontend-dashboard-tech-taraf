// React-pdf viewer
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
  Font,
  PDFDownloadLink,
} from "@react-pdf/renderer";

// images imports
import TarafLogo from "@/assets/Images/Taraf_pdf_Logo.png";
import topHeader from "@/assets/images/topHeader.png";
import bottomFooter from "@/assets/images/bottomFooter.png";
// import pageShape from "@/assets/images/pageShape.png";
import Taraf_QR_Code from "@/assets/Images/Taraf_QR_Code.png";

// functions imports
import { total, totalAmount2, totalWithFee } from "@/lib/utils";

// Font imports
import ReadexPro_VariableFont_HEXP_wght from "@/assets/fonts/ReadexPro-VariableFont_HEXP,wght.ttf";

//============================================================

//Arabic Font Register

Font.register({
  family: "ReadexPro-VariableFont_HEXP,wght",
  src: ReadexPro_VariableFont_HEXP_wght,
});

const styles = StyleSheet.create({
  page: {
    backgroundColor: "white",
    width: "100vw",

    fontFamily: "ReadexPro-VariableFont_HEXP,wght",
    position: "relative",
  },

  viewer: { width: "100vw" },

  templateView: {
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
  },

  headerView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    height: "10%",
  },

  footerView: {
    flexDirection: "row-reverse",
    alignItems: "center",
    width: "100%",
    height: "70px",
  },
  mainView: {
    flexDirection: "column",
    paddingHorizontal: 30,
    paddingVertical: 10,
    width: "100%",
    // minHeight: "80%",
  },

  headerViewLeft: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "60%",
    height: "60%",
    position: "relative",
  },

  headerViewRight: {
    flexDirection: "row",
    width: "40%",
    height: "100%",
    justifyContent: "flex-end",
  },

  footerViewLeft: {},
  footerViewRight: {
    width: "80%",
    height: "60%",
    position: "relative",
  },

  image: {
    height: "80%",
    width: "35%",
    marginRight: "20px",
  },

  text: {
    fontSize: 12,
    color: "white",
    width: "100%",
    textAlign: "center",
  },

  textView: {
    flexDirection: "column",
    gap: 5,
    marginTop: 15,
  },

  textViewItem: {
    flexDirection: "row",
    gap: 5,
    justifyContent: "flex-end",
  },

  textViewItemRight: {
    fontSize: 12,
    color: "black",
  },

  text1: {
    fontSize: 12,
    textAlign: "right",
    fontWeight: "500",
    color: "#003a42",
  },

  text1Small: {
    fontSize: 10,
    textAlign: "right",
    color: "#003a42",
  },

  text2: {
    marginRight: 10,
    fontSize: 12,
    textAlign: "right",
    color: "#003a42",
  },

  textBold: {
    fontSize: 13,
    fontWeight: "bold",
    textAlign: "right",
  },

  footerText: {
    fontSize: 7,
    color: "white",
    textAlign: "right",
  },

  footerView2: {
    flexDirection: "row-reverse",
    alignItems: "center",
    paddingRight: 30,
    paddingLeft: 60,
    justifyContent: "space-between",
    width: "100%",
    height: "100%",
  },

  view1: {
    marginTop: 30,
    flexDirection: "column",
    gap: 20,
  },

  view2: {
    marginTop: 30,
    flexDirection: "column",
    gap: 5,
  },

  view3: {
    marginTop: 10,
    flexDirection: "row",
    gap: 20,
  },

  view4: {
    marginTop: 10,
    flexDirection: "row",
    gap: 20,
  },

  view3sub: {
    textAlign: "right",
    flexDirection: "column",
    flex: "50%",
    gap: 5,
  },

  view4Sub: {
    flex: "50%",
    fontSize: 13,
    fontWeight: "bold",
    textAlign: "right",
  },
  viewShape: {
    width: "50px",
    height: "70%",
    backgroundColor: "#058f7c",
    opacity: 0.1,
    position: "absolute",
    top: 0,
    left: 0,
  },

  table: {
    display: "table",
    width: "100%",
    border: "1px solid black",
  },

  tableRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  tableHeader: {
    backgroundColor: "#00897b",
    color: "white",
    fontWeight: "bold",
  },

  cell: {
    border: "1px solid black",
    padding: 5,
    textAlign: "center",
    fontSize: 10,
    minHeight: 30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  cellMedium: {
    flexGrow: 2,
  },

  totalRow: {
    flexDirection: "row",
    justifyContent: "flex-end",
    fontWeight: "bold",
    marginTop: 5,
  },

  totalCell: {
    flexGrow: 1,
    border: "1px solid black",
    padding: 5,
    textAlign: "center",
  },

  totalCellHighlight: {
    backgroundColor: "#00897b",
    color: "white",
  },
});

//==============================================================

const TemplatePDF = ({ children }) => {
  return (
    <>
      {/* <View
        style={{
          position: "absolute",
          bottom: 0,
          left: 10,
          width: "300px",
          height: "400px",
        }}
      >
        <Image
          src={pageShape}
          style={{
            width: "100%",
            height: "100%",
          }}
        />
      </View> */}
      <View style={styles.templateView}>
        <View style={styles.headerView}>
          <View style={styles.headerViewLeft}>
            <Image
              src={topHeader}
              style={{
                position: "absolute",
                top: 0,
                bottom: 0,
                right: 0,
                left: 0,
              }}
            />
            <Text style={[styles.text, { textAlign: "left", marginLeft: 20 }]}>
              عرض سعر رقم #54365
            </Text>
          </View>
          <View style={styles.headerViewRight}>
            <Image src={TarafLogo} style={styles.image} />
          </View>
        </View>
        {/* //================================================ */}
        <View style={styles.mainView}>{children}</View>
        {/* //================================================ */}

        <View style={styles.footerView}>
          <View style={styles.footerViewRight}>
            <Image
              src={bottomFooter}
              style={{
                position: "absolute",
                top: 0,
                bottom: 0,
                right: 0,
                left: 0,
              }}
            />
            <View style={styles.footerView2}>
              <View style={{ flexDirection: "column", gap: 2 }}>
                <Text style={styles.footerText}>
                  المملكة العربية السعودية 2975 - الرياض - حي القيروان 9207 -
                  13533
                </Text>
                <Text style={[styles.footerText, { letterSpacing: 0.5 }]}>
                  Saudi Arabia 9207-13533 Alqirawan Distric Riyadh 2975
                </Text>
              </View>
              <View style={{ flexDirection: "column", gap: 2 }}>
                <Text style={styles.footerText}>1010806956 ست</Text>
                <Text style={styles.footerText}>C.R: 1010806956</Text>
              </View>
              <View style={{ flexDirection: "column", gap: 2 }}>
                <Text style={styles.footerText}>Mobile: 920035352</Text>
                <Text style={styles.footerText}>
                  Email: info@taraf-estate.com
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.footerViewLeft}></View>
        </View>
      </View>
    </>
  );
};

//==============================================================

const TableRow = ({ index, item }) => (
  <View
    style={[styles.tableRow, { flexDirection: "row-reverse" }]}
    wrap={false}
  >
    <View
      style={[
        styles.cell,
        {
          width: "10%",
          fontSize: 10,
          color: "#003a42",
          height: "100%",
        },
      ]}
    >
      <Text>{index + 1}</Text>
    </View>
    <View
      style={[
        styles.cell,
        styles.cellLarge,
        {
          width: "30%",
          minHeight: 30,
          flexDirection: "column",
          gap: 3,
          height: "100%",
        },
      ]}
    >
      <Text
        style={{
          fontWeight: "bold",
          fontSize: 10,
          color: "#003a42",
          textAlign: "right",
          width: "100%",
        }}
      >
        {item.category}
      </Text>
      <Text
        style={{
          fontWeight: "normal",
          fontSize: 10,
          color: "#003a42",
          textAlign: "right",
          width: "100%",
        }}
      >
        هذا وصف شامل للضنف وكل محتوياته هذا وصف شامل للضنف وكل محتوياته هذا وصف
        شامل للضنف وكل محتوياته
      </Text>
    </View>
    <View
      style={[
        styles.cell,
        {
          width: "15%",
          fontSize: 10,
          color: "#003a42",
          minHeight: 30,
          height: "100%",
        },
      ]}
    >
      <Text>{item.quantity}</Text>
    </View>
    <View
      style={[
        styles.cell,
        {
          width: "15%",
          fontSize: 10,
          color: "#003a42",
          minHeight: 30,
          height: "100%",
        },
      ]}
    >
      <Text>{item.unit}</Text>
    </View>
    <View
      style={[
        styles.cell,
        {
          width: "15%",
          fontSize: 10,
          color: "#003a42",
          minHeight: 30,
          height: "100%",
        },
      ]}
    >
      <Text>{item.price}</Text>
    </View>
    <View
      style={[
        styles.cell,
        {
          width: "15%",
          fontSize: 10,
          color: "#003a42",
          minHeight: 30,
          height: "100%",
        },
      ]}
    >
      <Text>{total(item.price, item.quantity)}</Text>
    </View>
  </View>
);
//==============================================================

const DataTable = ({ termsData }) => {
  return (
    <>
      <View style={[styles.table, styles.tableHeader]} wrap={false}>
        <View style={[styles.tableRow, { flexDirection: "row-reverse" }]}>
          <Text style={[styles.cell, { width: "10%" }]}>#</Text>
          <Text
            style={[
              styles.cell,
              styles.cellLarge,
              { width: "30%", fontSize: 10 },
            ]}
          >
            الصنف
          </Text>
          <Text style={[styles.cell, { width: "15%", fontSize: 10 }]}>
            الكمية
          </Text>
          <Text style={[styles.cell, { width: "15%", fontSize: 10 }]}>
            الوحدة
          </Text>
          <Text style={[styles.cell, { width: "15%", fontSize: 10 }]}>
            السعر
          </Text>
          <Text style={[styles.cell, { width: "15%", fontSize: 10 }]}>
            الإجمالي
          </Text>
        </View>
      </View>

      <View style={[styles.table]}>
        {termsData.map((item, idx) => (
          <TableRow key={idx} index={idx} item={item} />
        ))}

        {/* Total Row */}
        <View style={[styles.tableRow, { flexDirection: "row-reverse" }]}>
          <Text
            style={[
              styles.cell,
              { width: "85%", fontSize: 10, color: "#003a42" },
            ]}
          >
            الإجمالي
          </Text>
          <Text
            style={[
              styles.cell,
              { width: "15%", fontSize: 10, color: "#003a42" },
            ]}
          >
            {totalAmount2(termsData)}
          </Text>
        </View>

        {/* Grand Total Row */}
        <View
          style={[
            styles.tableRow,
            styles.totalCellHighlight,
            { flexDirection: "row-reverse" },
          ]}
        >
          <Text style={[styles.cell, { width: "85%", fontSize: 10 }]}>
            الإجمالي شامل الضريبة
          </Text>
          <Text style={[styles.cell, { width: "15%", fontSize: 10 }]}>
            {" "}
            {totalWithFee(termsData)}{" "}
          </Text>
        </View>
      </View>
    </>
  );
};
//==============================================================

const MyDocument = ({ offerData }) => {
  return (
    <Document style={styles.page}>
      <Page size="A4" style={styles.page}>
        <View
          wrap
          style={{
            paddingVertical: 20,
            width: "100%",
          }}
        >
          <TemplatePDF>
            <View style={[styles.textView, { marginBottom: 30 }]}>
              <View style={styles.textViewItem}>
                <Text style={styles.textViewItemRight}>{offerData.name}</Text>
                <Text style={styles.textViewItemRight}>:اسم العميل</Text>
              </View>
              <View style={styles.textViewItem}>
                <Text style={styles.textViewItemRight}>وريف العقارية</Text>
                <Text style={styles.textViewItemRight}>:شركة</Text>
              </View>
              <View style={styles.textViewItem}>
                <Text style={styles.textViewItemRight}>
                  {
                    new Date(Date.now() + 15 * 24 * 60 * 60 * 1000)
                      .toISOString()
                      .split("T")[0]
                  }
                </Text>
                <Text style={styles.textViewItemRight}>:تاريخ الانتهاء</Text>
              </View>
              <View style={styles.textViewItem}>
                <Text style={styles.textViewItemRight}>
                  {new Date().toISOString().split("T")[0]}
                </Text>
                <Text style={styles.textViewItemRight}>:تاريخ العرض</Text>
              </View>
            </View>

            <Text
              style={[
                styles.textViewItemRight,
                { textAlign: "right", fontSize: 10, marginBottom: 10 },
              ]}
            >
              : تم اعداد هذا العرض على طلبكم الكريم , ويسرنا ان نرفق لكم هذا
              العرض بالمواصفات التالية
            </Text>

            <DataTable termsData={offerData.terms} />

            <View style={styles.view2}>
              <View
                style={[styles.view4, { gap: 10, justifyContent: "center" }]}
              >
                <Text
                  style={[styles.view4Sub, { marginLeft: 70, fontSize: 11 }]}
                >
                  :طرق الدفع
                </Text>
                <Text style={[styles.view4Sub, { fontSize: 11 }]}>
                  :الشروط والأحكام
                </Text>
              </View>
              <View style={[styles.view3, { gap: 30 }]}>
                <Image src={Taraf_QR_Code} style={{ width: 60, height: 60 }} />
                <View style={[styles.view3sub, { paddingRight: 10 }]}>
                  <Text style={[styles.text1Small, { fontSize: 9 }]}>
                    الاسم : شركة مسكن ترف للخدمات العقارية -
                  </Text>
                  <Text style={[styles.text1Small, { fontSize: 9 }]}>
                    SA1780000362608018844441 : رقم الحساب -
                  </Text>
                </View>
                <View style={[styles.view3sub, { paddingRight: 15 }]}>
                  <Text style={[styles.text1Small, { fontSize: 9 }]}>
                    العرض ساري لمدة 10 ايام من تاريخ الانشاء
                  </Text>
                  <Text style={[styles.text1Small, { fontSize: 9 }]}>
                    أي تغييرات على نطاق العمل أو الأسعار يجب أن يتم الاتفاق عليه
                    بخطاب رسمي
                  </Text>
                  <Text style={[styles.text1Small, { fontSize: 9 }]}>
                    جميع الأسعار تشمل الضرائب ما لم يذكر خلاف ذلك
                  </Text>
                  <Text style={[styles.text1Small, { fontSize: 9 }]}>
                    الدفع يتم نقدًا او عن طريق التحويل البنكي خلال 10 ايام من
                    تاريخ عرض السعر
                  </Text>
                </View>
              </View>
            </View>
          </TemplatePDF>
        </View>
      </Page>

      {/* //============================================ */}
    </Document>
  );
};

export default MyDocument;

export const DownloadButton = ({
  WhileLoadingUI,
  AfterLoadingUI,
  documentOfferData,
}) => {
  return (
    <PDFDownloadLink
      document={<MyDocument offerData={documentOfferData} />}
      fileName="MyDocument.pdf"
      style={{ textDecoration: "none", height: "100%" }}
    >
      {({ loading }) => (
        <button
          type="button"
          disabled={loading}
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            color: `${loading ? "grey" : "#023b41"}`,
            border: "none",
            borderRadius: 4,
            cursor: loading ? "not-allowed" : "pointer",
          }}
        >
          {loading ? WhileLoadingUI : AfterLoadingUI}
        </button>
      )}
    </PDFDownloadLink>
  );
};

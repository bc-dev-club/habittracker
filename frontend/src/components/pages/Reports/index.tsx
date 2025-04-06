import { CSSProperties } from "react";
import { ReportItem } from "@/components/molecules/ReportsItem";
import { useReports } from "./hooks";

const Styles: { [key: string]: CSSProperties } = {
    container: {
        maxWidth: "800px",
        margin: "0 auto",
        marginTop: "140px",
    },
    reportsTitle: {
      fontFamily : "'Noto Sans JP', sans-serif",
      fontSize : "200%",
      textAlign : "center",
    },
  };


  export const Reports = () => {
      const { reports } = useReports();

      return (
        <div style={Styles.container}>
          <h1 style={Styles.reportsTitle}>定期レポート一覧</h1>
          {reports.length !== 0 && (
            <>
              {reports.map((report, index) => (
                <ReportItem key={report.id} report={report} isFirst={index === 0} />
              ))}
            </>
          )}
        </div>
      );
    };
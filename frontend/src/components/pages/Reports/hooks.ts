import { useEffect, useState } from "react";
import * as types from "types";

export const useReports = () => {
    const [reports, setReports] = useState<types.Report[]>([]);

    const fetchReports = async () => {
        const data: types.Report[] = [
         { id: 1, title: "2025/4" },
         { id: 2, title: "2025/5" },
         { id: 3, title: "2025/6" },
        ];  
        setReports(data);
    };

    useEffect(() => {
        fetchReports();
    }, []);

    return {
        reports
    };
};
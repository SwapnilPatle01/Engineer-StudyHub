import { useEffect, useState } from "react";
import axios from "axios";

const CompanyList = () => {
    const [companies, setCompanies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchCompanies = async () => {
            try {
                const token = localStorage.getItem("token");
                const response = await axios.get("http://localhost:5000/api/v1/company/get", {
                    headers: {
                        Authorization: token,
                    },
                });

                if (response.data.success) {
                    setCompanies(response.data.companies);
                } else {
                    setError("No companies found");
                }
            } catch (error) {
                console.error("Error fetching companies:", error);
                setError("Failed to load companies");
            } finally {
                setLoading(false);
            }
        };

        fetchCompanies();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div className="overflow-x-auto p-4">
            <h2 className="text-xl font-bold mb-4">Company List</h2>
            <table className="table w-full table-zebra">
                <thead>
                    <tr>
                        <th>Logo</th>
                        <th>Company Name</th>
                        <th>Created</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {companies.map((company) => (
                        <tr key={company._id}>
                            <td>
                                <img src={company.logo} alt={company.name} className="w-12 h-12 rounded-full" />
                            </td>
                            <td className="font-semibold">{company.name}</td>
                            <td>{new Date(company.createdAt).toLocaleDateString()}</td>
                            <td>
                                <button className="btn btn-sm btn-primary mr-2">View</button>
                                <button className="btn btn-sm btn-secondary">Edit</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default CompanyList;
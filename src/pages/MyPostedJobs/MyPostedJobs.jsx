import { useEffect, useState } from "react";
import useAuth from "../../Hooks/UseAuth";
import { Link } from "react-router-dom";


const MyPostedJobs = () => {

    const [jobs, setJobs] = useState([])
    const { user } = useAuth();

    useEffect(() => {
        fetch(`http://localhost:5000/jobs?email=${user.email}`)
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [user.email])

    return (
        <div>
            <h1>My Posted Jobs: {jobs.length}</h1>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Job title</th>
                            <th>Application Deadline</th>
                            <th>Application Count</th>
                            <th>View Applications</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            jobs.map((job, index) => <tr key={job._id} className="bg-base-200">
                                <th>{index + 1}</th>
                                <td>{job.title}</td>
                                <td>{job.applicationDeadline}</td>
                                <td>{job.applicationCount}</td>
                                <td>
                                   <Link to={`/viewApplications/${job._id}`}> <button className="btn btn-link">View Applications</button></Link>
                                </td>
                            </tr>)
                        }
                      
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyPostedJobs;
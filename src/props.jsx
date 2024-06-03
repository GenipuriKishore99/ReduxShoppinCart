export function Table(props){
    return(
        <div>
            <caption>Table</caption>
            <table className="table">
                <thead>
                    <tr>
                        {
                            props && props.headers && props.headers.map((m)=>{
                                return(
                                    <th>{m}</th>
                                )
                            })
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        props && props.data && props.data.map((p)=>{
                            return(
                                <tr>
                                    <td>{p.name}</td>
                                    <td>{p.email}</td>
                                    {/* <td>{p.name}</td> */}
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}
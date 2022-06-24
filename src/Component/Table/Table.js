import './table.css'
function Table(prop) {
    return (<>
        <table className='wrapper'>
            <thead className='head'>
                <th>Ingredient</th>
                <th>Amount</th>
            </thead>
            <tbody className='body'>
                {
                    prop.ingredient.map((val, index) => {
                        return(
                            <tr className='datawrapper'>
                                <td className='data'>{val}</td>
                                <td className='data'>{prop.measures[index]}</td>
                            </tr>
                        );
                    })
                }
            </tbody>
        </table>
    </>)
}
export default Table;
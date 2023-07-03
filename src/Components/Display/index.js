import styles from "./display.module.css"

export const Display = ({ data }) => {
	return (
		<>
			{data.length > 0 && (
				<div className={styles.tableContainer}>
					<table className={styles.table}>
						<thead>
							<tr>
								<th>Name</th>
								<th>Age</th>
							</tr>
						</thead>
						<tbody>
							{data.map(item => (
								<tr key={item.id}>
									<td>{item.name}</td>
									<td>{item.age}</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			)}
		</>
	)
}

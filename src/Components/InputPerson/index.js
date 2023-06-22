import styles from "./inputPerson.module.css"

export const InputPerson = () => {
	return (
		<>
			<form className={styles.form}>
				<fieldset>
					<legend>Enter Details</legend>
					<div className={styles.form_field}>
						<label htmlFor='name'>Name</label>
						<input type='text' id='name' name='details' />
					</div>
					<div className={styles.form_field}>
						<label htmlFor='age'>Age</label>
						<input type='number' id='age' name='details' />
					</div>
					<div className={styles.form_submit}>
						<input type='submit' value='ADD' />
					</div>
				</fieldset>
			</form>
		</>
	)
}

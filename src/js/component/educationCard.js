import React, { useState } from "react";
import "../../styles/index.scss";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export const EducationCard = props => {
	const [editMode, setEditMode] = useState(false);
	const [degree, setDegree] = useState(props.degree);
	if (props.degree != degree) setDegree(props.degree);
	const [school, setSchool] = useState(props.school);
	if (props.school != school) setSchool(props.school);
	const [course, setCourse] = useState(props.course);
	if (props.course != course) setCourse(props.course);
	const [fromDate, setFromDate] = useState(props.fromDate);
	if (props.fromDate != fromDate) setFromDate(props.fromDate);
	const [toDate, setToDate] = useState(props.toDate);
	if (props.toDate != toDate) setToDate(props.toDate);

	return (
		<Context.Consumer>
			{({ actions }) => {
				return (
					<div className="card mt-2 bg-light">
						<div className={editMode ? "card-body text-center" : "card-body text-left"}>
							<div className="float-left">
								<i
									className="fas fa-trash-alt mr-3"
									onClick={() => actions.deleteEducation(props.id)}
								/>
								{editMode ? (
									<i className="fas fa-times fa-lg" onClick={() => setEditMode(!editMode)} />
								) : (
									<i className="fas fa-pencil-alt" onClick={() => setEditMode(!editMode)} />
								)}
							</div>
							<div className={editMode ? "text-center" : "text-right"}>
								{editMode ? (
									<DatePicker
										className="datepicker"
										selected={new Date(fromDate)}
										dateFormat="MM/dd/yyyy"
										fixedHeight
										showMonthDropdown
										showYearDropdown
										onChange={date => {
											setFromDate(
												date.getMonth() + 1 + "/" + date.getDate() + "/" + date.getFullYear()
											);
										}}
									/>
								) : (
									<i className="dates">{fromDate} - </i>
								)}
								{editMode ? (
									<DatePicker
										className="datepicker"
										selected={new Date(toDate)}
										dateFormat="MM/dd/yyyy"
										fixedHeight
										showMonthDropdown
										showYearDropdown
										onChange={date => {
											setToDate(
												date.getMonth() + 1 + "/" + date.getDate() + "/" + date.getFullYear()
											);
										}}
									/>
								) : (
									<i className="dates">{toDate}</i>
								)}
							</div>
							{editMode ? (
								<input
									className="m-1"
									size="37"
									type="text"
									value={degree}
									onChange={({ target: { value: v } }) => setDegree(v)}
								/>
							) : (
								<h5 className="card-title text-center">{degree}</h5>
							)}
							{editMode ? (
								<input
									className="m-1"
									size="37"
									type="text"
									value={school}
									onChange={e => setSchool(e.target.value)}
								/>
							) : (
								<h6 className="card-title text-center">{school}</h6>
							)}
							{editMode ? (
								<input
									className="m-1"
									size="37"
									type="text"
									value={course}
									onChange={e => setCourse(e.target.value)}
								/>
							) : (
								<p className="card-text text-center">{course}</p>
							)}
						</div>
						<div className="card-footer text-muted">
							<input
								className="display-inline-block"
								type="checkbox"
								checked={props.resume === "true" ? "checked" : ""}
								onChange={() => {
									let resume = props.resume === "true" ? "false" : "true";
									actions.editEducation(props.id, school, degree, course, fromDate, toDate, resume);
								}}
							/>
							Resume
							{editMode ? (
								<button
									className="btn btn-info float-right"
									onClick={() =>
										actions.editEducation(
											props.id,
											school,
											degree,
											course,
											fromDate,
											toDate,
											props.resume
										)
									}>
									Save
								</button>
							) : (
								""
							)}
						</div>
					</div>
				);
			}}
		</Context.Consumer>
	);
};

EducationCard.propTypes = {
	id: PropTypes.number,
	degree: PropTypes.string,
	school: PropTypes.string,
	course: PropTypes.string,
	fromDate: PropTypes.string,
	toDate: PropTypes.string,
	resume: PropTypes.string
};

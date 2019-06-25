import React from "react";
import Battleship from "../../img/battleship.png";
import ContactList from "../../img/contact-list.jpg";
import TicTacToe from "../../img/tictactoe.jpg";
import IG from "../../img/ig.png";
import MusicPlayer from "../../img/music-player.png";
import TrafficLight from "../../img/traffic-light.jpeg";

const projectDescription = [
	{
		name: "Tic-Tac-Toe",
		Tools: "React · ECMASCRIPT · HTML · CSS",
		imgUrl: TicTacToe,
		Code: "https://github.com/jhcxavier/Tic-Tac-Toe/blob/master/src/js/App.js"
	},

	{
		name: "Traffic Light",
		Tools: "React · CSS · HTML · ECMASCRIPT",
		imgUrl: TrafficLight,
		Code: "https://github.com/jhcxavier/Traffic-Light-React-/blob/master/src/js/component/TrafficLight.js"
	},
	{
		name: "Battleship",
		Tools: "JavaScript · React · HTML · CSS",
		imgUrl: Battleship,
		Code: "https://github.com/hernanjkd/Battleship"
	},
	{
		name: "Music Player",
		Tools: "Bootstrap · JavaScript · API · CSS",
		imgUrl: MusicPlayer,
		Code: "https://github.com/hernanjkd/Music-Player"
	},
	{
		name: "Instagram Feed",
		Tools: "React · CSS · HTML · JS · Bootstrap",
		imgUrl: IG,
		Code: "https://github.com/VF4code/Instagram-Feed"
	},
	{
		name: "Contact List",
		Tools: "React · Flask · Python · JS · HTML",
		imgUrl: ContactList,
		Code: "https://github.com/jhcxavier/Contact-List-Back-End"
	}
];

export class Projects extends React.Component {
	render() {
		return (
			<div className="container-fluid">
				<div id="projects" className="row d-flex justify-content-around">
					{projectDescription.map((item, index) => {
						return (
							<div key={index} className="projects imgshadow col-3 m-4  bg-dark text-light p-0 pb-2">
								<img src={item.imgUrl} className="card-img-top" alt="..." />
								<div className="card-body">
									<h5 className="card-title">{item.name}</h5>
									<p className="card-text">{item.Tools}</p>
									<a href="#" className="btn btn-info float-left">
										Demo
									</a>
									<a
										href={item.Code}
										target="_blank"
										rel="noopener noreferrer"
										className="btn btn-info float-right">
										Code
									</a>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		);
	}
}
// 									<button
// 										type="button"
// 										className="btn btn-primary"
// 										data-toggle="modal"
// 										data-target="#exampleModalScrollable"
// 										onClick={() => {
// 											document.querySelector("[id=exampleModalScrollable]").value;
// 										}}>
// 										Launch demo modal
// 									</button>

// <div
// 	className="modal fade"
// 	id="exampleModalScrollable"
// 	tabIndex="-1"
// 	role="dialog"
// 	aria-labelledby="exampleModalScrollableTitle"
// 	aria-hidden="true">
// 	<div className="modal-dialog modal-dialog-scrollable" role="document">
// 		<div className="modal-content">
// 			<div className="modal-header">
// 				<h5 className="modal-title" id="exampleModalScrollableTitle">
// 					Modal title
// 				</h5>
// 				<button type="button" className="close" data-dismiss="modal" aria-label="Close">
// 					<span aria-hidden="true">&times;</span>
// 				</button>
// 			</div>
// 			<div className="modal-body">...</div>
// 			<div className="modal-footer">
// 				<button type="button" className="btn btn-secondary" data-dismiss="modal">
// 					Close
// 				</button>
// 				<button type="button" className="btn btn-primary">
// 					Save changes
// 				</button>
// 			</div>
// 		</div>
// 	</div>
// </div>;

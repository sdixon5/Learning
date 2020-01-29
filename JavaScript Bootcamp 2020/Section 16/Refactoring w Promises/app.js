const btn = document.querySelector("button");

const moveX = (element, amount, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const bodyBoundary = document.body.clientWidth;
      const elRight = element.getBoundingClientRect().right;
      const currLeft = element.getBoundingClientRect().left;
      if (elRight + amount > bodyBoundary) {
        reject({ bodyBoundary, elRight, amount});
      } else {
        element.style.transform = `translateX(${currLeft + amount}px)`;
        resolve();
      }
    }, delay);
  });
};

moveX(btn, 300, 1000)
    .then(() => moveX(btn, 300, 1000))
    .then(() => moveX(btn, 300, 1000))
    .then(() => moveX(btn, 300, 1000))
    .then(() => moveX(btn, 300, 1000))
    .then(() => moveX(btn, 300, 1000))
    .catch(({ bodyBoundary, elRight, amount}) => {
        console.log(`Body is ${bodyBoundary}px wide`);
        console.log(`Element is at ${elRight}px, ${amount}px is too large!`);
    });

//THANKS TO ARROW FUNCTION CAN USE AN IMPLICIT RETURN!
//-------------------------------------------------------
// moveX(btn, 300, 1000)
//   .then(res => {
//     return moveX(btn, 300, 1000);
//   })
//   .then(res => {
//     return moveX(btn, 300, 1000);
//   })
//   .then(res => {
//     return moveX(btn, 300, 1000);
//   })
//   .then(res => {
//     console.log("done");
//   })
//   .catch(() => {
//       console.log('Out of space, cannot move');
//   });

// ORIGINAL TERRIBLE WAY OF DOING IT!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//---------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------
// const moveX = (element, amount, delay, onSuccess, onFailure) => {
// 	setTimeout(() => {
// 		const bodyBoundary = document.body.clientWidth;
// 		const elRight = element.getBoundingClientRect().right;
// 		const currLeft = element.getBoundingClientRect().left;
// 		if (elRight + amount > bodyBoundary) {
// 			onFailure();
// 		}
// 		else {
// 			element.style.transform = `translateX(${currLeft + amount}px)`;
// 			onSuccess();
// 		}
// 	}, delay);
// };

// LOOK AT THIS UGLY MESS!
// moveX(
// 	btn,
// 	300,
// 	1000,
// 	() => {
// 		//success callback
// 		moveX(
// 			btn,
// 			300,
// 			1000,
// 			() => {
// 				//success callback
// 				moveX(
// 					btn,
// 					300,
// 					1000,
// 					() => {
// 						//success callback
// 						moveX(
// 							btn,
// 							300,
// 							1000,
// 							() => {
// 								//success callback
// 								moveX(
// 									btn,
// 									300,
// 									1000,
// 									() => {
// 										//success callback
// 										alert('YOU HAVE A WIDE SCREEN!');
// 									},
// 									() => {
// 										//failure callback
// 										alert('CANNOT MOVE FURTHER!');
// 									}
// 								);
// 							},
// 							() => {
// 								//failure callback
// 								alert('CANNOT MOVE FURTHER!');
// 							}
// 						);
// 					},
// 					() => {
// 						//failure callback
// 						alert('CANNOT MOVE FURTHER!');
// 					}
// 				);
// 			},
// 			() => {
// 				//failure callback
// 				alert('CANNOT MOVE FURTHER!');
// 			}
// 		);
// 	},
// 	() => {
// 		//failure callback
// 		alert('CANNOT MOVE FURTHER!');
// 	}
// );

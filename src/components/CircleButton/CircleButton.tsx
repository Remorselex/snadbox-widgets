// import IconButton from '@material-ui/core/IconButton';
// import { makeStyles } from '@material-ui/core/styles';
// import { KeyboardArrowLeft, KeyboardArrowRight } from '@material-ui/icons';

// import { useState } from 'react';

// import { EventAction } from '../../utils/types';

// interface ICircleButtonProps {
//   setIsOpen: EventAction<boolean>;
//   isOpen: boolean;
// }

// function CircleButton({ setIsOpen, isOpen }: ICircleButtonProps) {
//   const useStyles = makeStyles((theme) => ({
//     button: {
//       margin: theme.spacing(1),
//       backgroundColor: 'white',
//       opacity: 0.9,
//       height: '0.5em',
//       width: '0.5em',
//       border: '1px solid gray',
//       '&:hover': {
//         backgroundColor: 'white',
//       },
//     },
//   }));
//   const classes = useStyles();
//   const [isArrowUp, setIsArrowUp] = useState(false);

//   const handleClick = () => {
//     setIsOpen(!isOpen);
//     setIsArrowUp(!isArrowUp);
//   };

//   return (
//     <div>
//       <IconButton
//         className={classes.button}
//         onClick={handleClick}
//         disableRipple
//       >
//         {isArrowUp ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
//       </IconButton>
//     </div>
//   );
// }

// eslint-disable-next-line import/no-anonymous-default-export
export default {};

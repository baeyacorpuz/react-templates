import { makeStyles } from "@material-ui/core"
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const useStyles = makeStyles({
  quill: {
    "& .ql-editor.ql-blank::before": {
      fontSize:  "16px !important",
      fontStyle: "inherit",
      color: "rgba(0, 0, 0, 0.23)",
      fontFamily: "Inter"
    },
    "& .ql-container.ql-snow": {
      minHeight: 150,
      borderRadius: "0px 0px 4px 4px"
    },
    "& .ql-toolbar.ql-snow": {
      borderRaiud: "4px 4px 0px 0px"
    }
  }
})

const Quill = (props) => {
  const { name, setState, state } = props
  const classes = useStyles()
  const handleChange = (value) => {
    console.log(value)
    setState(value)
  }
  return (
    <ReactQuill className={classes.quill} theme="snow" placeholder="Book description" name={name} value={state} onChange={handleChange} />
  );
}

export default Quill;
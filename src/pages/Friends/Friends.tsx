import { Link } from "react-router-dom";
import { List } from "@mui/material";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";

const style = {
  py: 0,
  width: "100%",
  maxWidth: 1920,
  border: "1px solid",
  borderRadius: 2,
  borderColor: "divider",
  backgroundColor: "background.paper",
};

export function Friends() {
  return (
    <>
      <Link to={"/"}>
        <p>Go back to dashboard</p>
      </Link>
      <p>Přátelé</p>
      <input type="text" placeholder="Hledat přítele" />
      <button>Vyhledat</button>
      <List sx={style}>
        <ListItem>
          <IconButton color="inherit">
            <Avatar
              alt="Avatar"
              src="/pika.png"
              sx={{ width: 56, height: 56 }}
            />
          </IconButton>
          <ListItemText primary="Honza Tillů" />
        </ListItem>
        <Divider component="li" />
        <ListItem>
          <IconButton color="inherit">
            <Avatar
              alt="Avatar"
              src="/pika.png"
              sx={{ width: 56, height: 56 }}
            />
          </IconButton>
          <ListItemText primary="Petr Pavel" />
        </ListItem>
        <Divider component="li" />
        <ListItem>
          <IconButton color="inherit">
            <Avatar
              alt="Avatar"
              src="/pika.png"
              sx={{ width: 56, height: 56 }}
            />
          </IconButton>
          <ListItemText primary="Vojtěch David" />
        </ListItem>
        <Divider component="li" />
        <ListItem>
          <IconButton color="inherit">
            <Avatar
              alt="Avatar"
              src="/pika.png"
              sx={{ width: 56, height: 56 }}
            />
          </IconButton>
          <ListItemText primary="Grznár" />
        </ListItem>
      </List>
    </>
  );
}

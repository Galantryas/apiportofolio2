import React, {Component} from 'react';
import CardProduct from "./CardProduct";
import axios from 'axios';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing.unit * 2,
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  });

class Portofolio extends Component {
    constructor(){
        super();
        this.state = {
            portofolio : []
        };
    }

    componentDidMount() {
        axios.get('http://my-json-server.typicode.com/Galantryas/apiportofolio/portofolio')
            .then(res => {
                const portofolio = res.data;
                this.setState({ portofolio });
            })
            .catch((m) => {
                console.log("Error : "+m);
            })
    }

    render() {
        return (
            <div>
                <br/>
                <Grid container spacing={24}>
                        {this.state.portofolio.map((data) => {
                            return(
                                <Grid item xs={3}>
                                    <CardProduct logo={data.logo} title={data.skill} experience={data.experience} kepada={data.href}/>
                                </Grid>
                            )
                        })}
                </Grid>
            </div>
        );
    }
}

export default Portofolio;

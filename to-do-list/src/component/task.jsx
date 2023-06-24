import {Card, CardContent, Typography} from "@mui/material";


export const Task = ({title, children} ) =>{
    return <Card  sx={{ minWidth: 275, maxWidth: 400, m: 10 }} >
        <CardContent>
            <Typography variant="h5" component="div">
                {title}
            </Typography>
            <Typography variant="body2">
                {children}
                <br />
            </Typography>
        </CardContent>
    </Card>


}
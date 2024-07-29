import { Label } from "@mui/icons-material"
import Divider from "@mui/material/Divider"
import Link from "@mui/material/Link"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"

export const ResumeHeader = () => {

    return (
        <Stack flexDirection={'column'} textAlign={'center'}>
            <Typography  variant='h5'  textAlign={'center'}>PRASANTH M</Typography>
            <div className="flex flex-row items-center justify-center gap-2">
                <Link>prasanthjohn35@gmail.com</Link> | <Link>7904111678</Link> | <Typography>2.5+ years</Typography>
            </div>
            <span className="cursor-pointer" >
                <Link>Github</Link> | <Link>LinkedIn</Link>
            </span>
        </Stack>
    )
}

export const SkillsSection = () => {
    return (
        <Stack>
         <Typography variant='h6'>Skills</Typography>
         <Divider/>
         <LabelValue label="Language" value="Js"/>
        </Stack>
    )
}

interface LabelValueProps {
    label : string;
    value : string;
}
const LabelValue = (props:LabelValueProps) => {
        return (
            <Stack flexDirection={'row'} gap={1} alignItems={'center'}>
                <Typography variant="body1" fontWeight={700}>{props.label} :</Typography>
                <Typography variant="body2">{props.value}</Typography>
            </Stack>
        )
}
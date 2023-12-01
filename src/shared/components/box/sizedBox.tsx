import { View } from "react-native"

enum BoxOrientation {
    vertical = "vertical",
    horizontal = "horizontal"
}

type SizedBoxProps = {
    orientation?: BoxOrientation,
    dimens: number
}

const SizedBox: React.FC<SizedBoxProps> = ({ orientation =  BoxOrientation.vertical, dimens }) => {
    const isHorizontal: boolean = orientation === BoxOrientation.horizontal;

    return <>
        <View style={{
            width: isHorizontal ? dimens : undefined,
            height: !isHorizontal ? dimens : undefined, flexDirection: isHorizontal ? 'row' : 'column'
        }} />
    </>
}

export default SizedBox;
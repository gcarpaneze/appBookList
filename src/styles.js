import styled from 'styled-components'

export const Container = styled.SafeAreaView`
    flex: 1;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 20px;
`

export const Title = styled.Text`
    font-size: 25px;
    font-weight: bold;
    margin-top: 20px;
    color: #266299;
`

export const LabelInput = styled.Text`
    margin-top: 15px;
    margin-bottom: 2px;
    font-size: 16px;
    margin-right: 10px;
`

export const Input = styled.TextInput`
    background-color: #fff;
    border: 1px solid #808080;
    border-radius: 4px;
    height: 40px;
    width: 100%;
    padding: 10px;
    align-items: center;
`

export const Button = styled.TouchableOpacity`
    margin-top: 10px;
    margin-bottom: 10px;
    background-color:#266299;
    width: 100%;
    height:40px;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
`
export const LabelButton = styled.Text`
    font-size: 16px;
    font-weight: bold;
    color: #fff;
`

export const List = styled.FlatList`
    width: 100%;
`
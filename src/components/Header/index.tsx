import { useNavigation } from '@react-navigation/native';
import { Container, Logo, BackButton, BackIcon, ButtonTypeStyleProps } from './styles';

import logoImg from '@assets/logo.png';

type Props = {
  showBackButton?: boolean;
}

export function Header({ showBackButton = false }: ButtonTypeStyleProps) {
  const navigation = useNavigation();

  function handleGoBack(){
    navigation.navigate('groups')
  }

  return(
    <Container showBackButton={showBackButton}>
      { showBackButton &&
        <BackButton onPress={handleGoBack}>
          <BackIcon />
        </BackButton>
      }
      
      <Logo source={logoImg}/>
    </Container>
  )
}
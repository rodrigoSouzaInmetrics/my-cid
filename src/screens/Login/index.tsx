import { Text, TextInput, TouchableOpacity, View } from "react-native";

export default function Login() {
 return (
   <View className="flex-1 justify-center items-center">
    <View>
      <TextInput
      placeholder="Digite o seu email"
      />
      <TextInput
      placeholder="Digite a sua senha"
      secureTextEntry
      />
      <TouchableOpacity>
        <Text>Acessar</Text>
      </TouchableOpacity>
    </View>
   </View>
 );
}
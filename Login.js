import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = () => {
    // Validate the email and password
    if (!isValidEmail(email)) {
      setErrorMessage('Please enter a valid email address');
      return;
    }
    if (password.length < 6) {
      setErrorMessage('Password must be at least 6 characters long');
      return;
    }

    // If the email and password are valid, attempt to log in
    authenticate(email, password)
      .then(() => {
        // Navigate to the main screen if login is successful
        navigate('Main');
      })
      .catch(error => {
        setErrorMessage(error.message);
      });
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Art Flower Social Network</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
      />
      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={!showPassword}
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity onPress={toggleShowPassword}>
          <Icon name={showPassword ? 'eye-slash' : 'eye'} size={20} />
        </TouchableOpacity>
      </View>
      {errorMessage && <Text style={styles.errorMessage}>{errorMessage}</Text>}
      <Button title="Log in" onPress={handleLogin} />
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    backgroundImage: 'url(https://images.pexels.com/photos/6913746/pexels-photo-6913746.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load)', // Add a background image
    backgroundSize: 'cover' // Cover the entire screen with the image
  },
  logo: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#00b894' // Use a green color for the logo
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
  
marginBottom: 10,
padding: 10,
borderRadius: 5, // Add rounded corners to the input fields
backgroundColor: '#f1f2f6' // Use a light gray background color for the input fields
},
passwordContainer: {
flexDirection: 'row', // Arrange the password input and icon in a row
alignItems: 'center'
},
errorMessage: {
color: 'red',
marginBottom: 10
},
loginButton: {
backgroundColor: '#00b894', // Use a green color for the login button
width: '80%',
height: 40,
borderRadius: 5,
alignItems: 'center',
justifyContent: 'center'
},
loginButtonText: {
color: '#fff',
fontSize: 16,
fontWeight: 'bold'
}
};

export default LoginScreen;

#Plantproject 

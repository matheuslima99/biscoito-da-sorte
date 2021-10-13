import React, {useState} from 'react';
import {View, Image, Text, StyleSheet, TouchableOpacity} from 'react-native';

function App() {
  const [luckyPhrase, setLuckyPhrase] = useState('');
  const [image, setImage] = useState(require('./src/biscoito.png'));

  const prashes = [
    'A vida trará coisas boas se tiveres paciência.',
    'Demonstre amor e alegria em todas as oportunidades e verás que a paz nasce dentro de você.',
    'Não compense na ira o que lhe falta na razão.',
    'Defeitos e virtudes são apenas dois lados da mesma moeda.',
    'A maior de todas as torres começa no solo.',
    'Não há que ser forte. Há que ser flexível.',
    'Gente todo dia arruma os cabelos, por que não o coração?',
    'Há três coisas que jamais voltam; a flecha lançada, a palavra dita e a oportunidade perdida.',
    'A juventude não é uma época da vida, é um estado de espírito.',
    'Siga os bons e aprenda com eles.',
    'A sorte favorece a mente bem preparada.',
    'Se você se sente só é porque construiu muros ao invés de pontes.'
  ];

  const openFortuneCookie = () => {
    let phraseRandom = Math.floor(Math.random() * prashes.length);
    setLuckyPhrase(`" ${prashes[phraseRandom]} "`);
    setImage(require('./src/biscoitoAberto.png'));
  };

  const closeCokie = () => {
    setImage(require('./src/biscoito.png'));
    setLuckyPhrase('');
  };

  return (
    <View style={styles.container}>
      <Image style={styles.img} source={image} />
      <Text style={styles.phrase}> {luckyPhrase} </Text>
      <TouchableOpacity onPress={openFortuneCookie}>
        <View style={styles.button}>
          <Text style={styles.textButton}>Abrir biscoito</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={closeCokie}>
        <View style={[styles.button, {marginTop: 15, borderColor: '#121212'}]}>
          <Text style={[styles.textButton, {color: '#121212'}]}>
            Reiniciar biscoito
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: 250,
    height: 250,
  },
  phrase: {
    fontSize: 22,
    fontStyle: 'italic',
    color: '#FF8C00',
    textAlign: 'center',
    margin: 20,
  },
  button: {
    width: 200,
    padding: 12,
    borderColor: '#FF8C00',
    borderWidth: 2,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textButton: {
    color: '#FF8C00',
    fontSize: 18,
    fontWeight: '500',
  },
});

export default App;


import React from 'react';
import { Linking, StyleSheet, Button, View, SafeAreaView, Text} from 'react-native';
// import { initializeApp } from "firebase/app"
// import { getDatabase, ref, set } from "firebase/database";

// const firebaseConfig = {
//   apiKey: "AIzaSyBYAwCmt_0r_ezQqsw-wYr07Lkzx0jZSmM",
//   authDomain: "push-da883.firebaseapp.com",
//   databaseURL: "https://push-da883-default-rtdb.firebaseio.com",
//   projectId: "push-da883",
//   storageBucket: "push-da883.appspot.com",
//   messagingSenderId: "815988509488",
//   appId: "1:815988509488:web:83e6b30d55f61bce3a56f5"
// };

// const app = initializeApp(firebaseConfig);

// function storeHighScore(userId, score) {
//   const db = getDatabase();
//   const reference = ref(db, 'users/' + userId);
//   set(ref(db, 'users/' + userId), {
//     highscore: score,
//   });
// }

function Separator() {
  return (
    <View style={styles.separator} />
  );
}

const Home = ({ navigation }) => {
  // storeHighScore('난', 100);
  return (
	<SafeAreaView style={styles.container}>
    <View>
      <Text style={styles.title}>
        수강신청
      </Text>
      <Button
        title="Press me"
        onPress={() => Linking.openURL('https://newgh.gnu.ac.kr/main/na/ntt/selectNttList.do?mi=1126&bbsId=1028')}
      />
    </View>
    <Separator />
    <View>
      <Text style={styles.title}>
        장학금
      </Text>
      <Button
        title="Press me"
        onPress={() => Linking.openURL('https://newgh.gnu.ac.kr/main/na/ntt/selectNttList.do?mi=1126&bbsId=1028')}
      />
    </View>
    <Separator />
    <View>
      <Text style={styles.title}>
        기숙사
      </Text>
      <Button
        title="Press me"
        onPress={() => Linking.openURL('https://newgh.gnu.ac.kr/main/na/ntt/selectNttList.do?mi=1126&bbsId=1028')}
      />
    </View>
    <Separator />
    <View>
      <Text style={styles.title}>
        원하시는 푸시알림 설정은 밑에서 하세요
      </Text>
      <View style={styles.fixToText}>
        <Button
          title="설정"
          onPress={() => navigation.navigate('Setting')}
        />
      </View>
    </View>
  </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default Home;

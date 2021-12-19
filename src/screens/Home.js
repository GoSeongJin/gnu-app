import React from 'react';
import { StyleSheet, Button, View, SafeAreaView} from 'react-native';

function Separator() {
  return (
    <View style={styles.separator} />
  );
}

export const Home = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Button
            title="수강신청 공지사항 리스트"
            onPress={() => navigation.navigate('수강신청공지사항')}
          />
      </View>
      <Separator />
      <View>
        <Button
            title="장학금 공지사항 리스트"
            onPress={() => navigation.navigate('장학금공지사항')}
          />
      </View>
      <Separator />
      <View>
        <Button
            title="기숙사 공지사항 리스트"
            onPress={() => navigation.navigate('기숙사공지사항')}
          />
      </View>
      <Separator />
      <View>
        <Button
            title="네이버 공지사항 리스트"
            onPress={() => navigation.navigate('네이버공지사항')}
          />
      </View>
      <Separator />
    </SafeAreaView>
    );
  };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

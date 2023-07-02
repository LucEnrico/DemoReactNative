import {useState} from 'react';
import { View, Text,TextInput, TouchableOpacity,Image, FlatList,SectionList } from 'react-native'
import {useRouter} from 'expo-router';
import styles from './welcome.style';
import {icons, SIZES } from '../../../constants';

const jobTypes = ["Full-time","Part-time","Contractor"];

const Welcome = () => {

  const router = new useRouter();
  const [activeJobType, setactiveJobType] = useState('Full-time');
  
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.username}>Hello Adrian</Text>
        <Text style={styles.welcomeMessage}>Find your perferct job</Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
            <TextInput 
              style={styles.searchInput}
              value=""
              onChange={() => {}}
              placeholder='What are you looking for?'
            />
        </View>

        <TouchableOpacity style={styles.searchBtn} onPress={() => {}}>
          <Image 
            source={icons.search}
            resizeMode='contain'
            style={styles.searchBtnImage}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.tabsContainer}> 
          <FlatList
            data={jobTypes}
            renderTime={({item}) => (
                <TouchableOpacity style={styles.tab(activeJobType, item)}>
                  <Text>{item}</Text>
                </TouchableOpacity>
            )}
            />
      </View>
    </View>
  )
}

export default Welcome
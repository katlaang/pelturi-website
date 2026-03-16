import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';

import { STRIP_ITEMS } from '../constants/siteContent';
import { C } from '../constants/theme';

const W = Dimensions.get('window').width;
const PAD = W > 600 ? 40 : 16;

export default function Strip() {
  return (
    <View style={styles.strip}>
      {STRIP_ITEMS.map((item, index) => (
        <View key={item} style={styles.item}>
          {index > 0 && <View style={styles.sep} />}
          <Text style={styles.text}>{item}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  strip: {
    backgroundColor: C.forest,
    paddingVertical: 16,
    paddingHorizontal: PAD,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 0,
  },
  item: { flexDirection: 'row', alignItems: 'center' },
  sep: {
    width: 1,
    height: 14,
    backgroundColor: 'rgba(255,255,255,0.2)',
    marginHorizontal: W > 500 ? 20 : 12,
  },
  text: { color: 'rgba(255,255,255,0.78)', fontSize: 13 },
});

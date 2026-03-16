import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';

import { FEATURE_CARDS } from '../constants/siteContent';
import { C } from '../constants/theme';

const W = Dimensions.get('window').width;
const PAD = W > 600 ? 40 : 20;
const COLS = W > 700 ? 3 : W > 480 ? 2 : 1;
const CELL_W = W > 700 ? '33.33%' : W > 480 ? '50%' : '100%';

export default function Features() {
  return (
    <View style={styles.section}>
      <Text style={styles.label}>Core features</Text>
      <Text style={styles.heading}>Scouting, alerts,{'\n'}and follow-through.</Text>
      <Text style={styles.sub}>
        The current scope focuses on operational pest scouting: structured field data, location
        tracking, heat maps, alerts, analytics, and the records managers need to act quickly.
      </Text>

      <View style={styles.grid}>
        {FEATURE_CARDS.map((feature, index) => (
          <View
            key={feature.num}
            style={[
              styles.cell,
              index % COLS !== COLS - 1 && styles.cellBorderRight,
              index < FEATURE_CARDS.length - COLS && styles.cellBorderBottom,
            ]}
          >
            <Text style={styles.num}>{feature.num}</Text>
            <Text style={styles.title}>{feature.title}</Text>
            <Text style={styles.body}>{feature.body}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
    paddingVertical: 60,
    paddingHorizontal: PAD,
    backgroundColor: C.white,
  },
  label: {
    fontSize: 11,
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: 1.5,
    color: C.green,
    marginBottom: 10,
  },
  heading: {
    fontSize: W > 600 ? 36 : 28,
    fontWeight: '700',
    color: C.dark,
    letterSpacing: -0.8,
    lineHeight: W > 600 ? 44 : 36,
    marginBottom: 12,
  },
  sub: {
    fontSize: 15,
    color: C.muted,
    lineHeight: 24,
    marginBottom: 40,
    maxWidth: 620,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    borderWidth: 0.5,
    borderColor: '#dedede',
    borderRadius: 12,
    overflow: 'hidden',
  },
  cell: {
    width: CELL_W as any,
    padding: 24,
    backgroundColor: C.white,
  },
  cellBorderRight: { borderRightWidth: 0.5, borderRightColor: '#dedede' },
  cellBorderBottom: { borderBottomWidth: 0.5, borderBottomColor: '#dedede' },
  num: { fontSize: 11, color: '#9ba09a', fontWeight: '700', marginBottom: 10, letterSpacing: 1 },
  title: { fontSize: 15, fontWeight: '700', color: C.dark, marginBottom: 8 },
  body: { fontSize: 13, color: C.muted, lineHeight: 20 },
});

import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';

import Features from '../components/Features';
import PageShell from '../components/PageShell';
import { FEATURE_GROUPS } from '../constants/siteContent';
import { C } from '../constants/theme';

const W = Dimensions.get('window').width;
const PAD = W > 600 ? 40 : 20;
const CARD_WIDTH = W > 860 ? '31.5%' : W > 560 ? '48.5%' : '100%';

export default function FeaturesPage() {
  return (
    <PageShell>
      <Features />

      <View style={styles.section}>
        <Text style={styles.label}>What is included</Text>
        <Text style={styles.heading}>Built around the work your teams are already doing.</Text>

        <View style={styles.grid}>
          {FEATURE_GROUPS.map(group => (
            <View key={group.title} style={styles.card}>
              <Text style={styles.cardTitle}>{group.title}</Text>
              {group.items.map(item => (
                <View key={item} style={styles.item}>
                  <View style={styles.dot} />
                  <Text style={styles.itemText}>{item}</Text>
                </View>
              ))}
            </View>
          ))}
        </View>
      </View>
    </PageShell>
  );
}

const styles = StyleSheet.create({
  section: {
    paddingHorizontal: PAD,
    paddingBottom: 60,
    maxWidth: 1100,
    width: '100%',
    alignSelf: 'center',
  },
  label: {
    fontSize: 11,
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: 1.5,
    color: C.green,
    marginBottom: 10,
  },
  heading: {
    fontSize: W > 600 ? 34 : 26,
    lineHeight: W > 600 ? 42 : 34,
    fontWeight: '700',
    color: C.dark,
    marginBottom: 28,
    maxWidth: 700,
  },
  grid: { flexDirection: 'row', flexWrap: 'wrap', gap: 18 },
  card: {
    width: CARD_WIDTH as any,
    backgroundColor: '#F5F2EB',
    borderRadius: 14,
    padding: 22,
    gap: 12,
  },
  cardTitle: { fontSize: 20, fontWeight: '700', color: C.dark },
  item: { flexDirection: 'row', gap: 10, alignItems: 'flex-start' },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: C.green,
    marginTop: 7,
  },
  itemText: { flex: 1, fontSize: 15, lineHeight: 24, color: C.muted },
});

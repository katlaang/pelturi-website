import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';

import Contact from '../components/Contact';
import PageShell from '../components/PageShell';
import { TARGET_MARKETS } from '../constants/siteContent';
import { C } from '../constants/theme';

const W = Dimensions.get('window').width;
const PAD = W > 600 ? 40 : 20;
const CARD_WIDTH = W > 860 ? '48.5%' : '100%';

export default function ContactPage() {
  return (
    <PageShell>
      <Contact />

      <View style={styles.section}>
        <Text style={styles.label}>Who we are building for</Text>
        <View style={styles.grid}>
          {TARGET_MARKETS.map(item => (
            <View key={item} style={styles.card}>
              <Text style={styles.cardText}>{item}</Text>
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
    paddingTop: 36,
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
    marginBottom: 12,
  },
  grid: { flexDirection: 'row', flexWrap: 'wrap', gap: 18 },
  card: {
    width: CARD_WIDTH as any,
    backgroundColor: '#F5F2EB',
    borderRadius: 14,
    padding: 22,
  },
  cardText: { fontSize: 18, lineHeight: 28, color: C.dark, fontWeight: '600' },
});

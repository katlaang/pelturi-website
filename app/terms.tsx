import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';

import PageIntro from '../components/PageIntro';
import PageShell from '../components/PageShell';
import { TERMS_SECTIONS } from '../constants/siteContent';
import { C } from '../constants/theme';

const W = Dimensions.get('window').width;
const PAD = W > 600 ? 40 : 20;

export default function Terms() {
  return (
    <PageShell>
      <PageIntro
        eyebrow="Terms"
        title="Terms of use overview"
        description="These terms summarize how access, subscriptions, and customer responsibilities are expected to work for the current product scope."
      />

      <View style={styles.section}>
        {TERMS_SECTIONS.map(section => (
          <View key={section.title} style={styles.card}>
            <Text style={styles.title}>{section.title}</Text>
            {section.items.map(item => (
              <View key={item} style={styles.item}>
                <View style={styles.dot} />
                <Text style={styles.itemText}>{item}</Text>
              </View>
            ))}
          </View>
        ))}
      </View>
    </PageShell>
  );
}

const styles = StyleSheet.create({
  section: {
    paddingHorizontal: PAD,
    paddingBottom: 60,
    maxWidth: 900,
    width: '100%',
    alignSelf: 'center',
    gap: 18,
  },
  card: {
    backgroundColor: C.white,
    borderWidth: 0.5,
    borderColor: '#d9e4db',
    borderRadius: 14,
    padding: 24,
    gap: 14,
  },
  title: { fontSize: 22, fontWeight: '700', color: C.dark },
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

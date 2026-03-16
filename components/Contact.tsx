import React, { useState } from 'react';
import {
  Alert,
  Dimensions,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import { CONTACT_AREAS, CONTACT_DETAILS } from '../constants/siteContent';
import { C } from '../constants/theme';

const W = Dimensions.get('window').width;
const PAD = W > 600 ? 40 : 20;
const IS_WIDE = W > 800;

interface FormState {
  firstName: string;
  lastName: string;
  email: string;
  farm: string;
  interest: string;
  message: string;
}

const INTERESTS = [
  'Pilot rollout',
  'Multi-farm deployment',
  'Workflow review',
  'Exports and reporting',
];

export default function Contact() {
  const [form, setForm] = useState<FormState>({
    firstName: '',
    lastName: '',
    email: '',
    farm: '',
    interest: '',
    message: '',
  });
  const [interestOpen, setInterestOpen] = useState(false);

  const set = (key: keyof FormState) => (value: string) =>
    setForm(current => ({ ...current, [key]: value }));

  const submit = () => {
    if (!form.email || !form.firstName) {
      Alert.alert('Missing fields', 'Please fill in your name and email.');
      return;
    }

    Alert.alert('Request recorded', "Thanks. We'll use this information to scope the conversation.");
    setForm({
      firstName: '',
      lastName: '',
      email: '',
      farm: '',
      interest: '',
      message: '',
    });
  };

  return (
    <View style={styles.wrap}>
      <View style={[styles.inner, IS_WIDE && { flexDirection: 'row' }]}>
        <View style={[styles.left, IS_WIDE && { flex: 1 }]}>
          <Text style={styles.label}>Contact</Text>
          <Text style={styles.heading}>Plan the rollout{'\n'}for your operation.</Text>
          <Text style={styles.body}>
            Use this page to scope a pilot, review workflows, or plan a broader multi-farm
            deployment for greenhouse and field scouting.
          </Text>

          <View style={styles.details}>
            {CONTACT_DETAILS.map(item => (
              <View key={item.label} style={styles.detail}>
                <Text style={styles.detailKey}>{item.label}</Text>
                <Text style={styles.detailVal}>{item.value}</Text>
              </View>
            ))}
          </View>

          <View style={styles.areas}>
            {CONTACT_AREAS.map(area => (
              <View key={area} style={styles.areaItem}>
                <View style={styles.areaDot} />
                <Text style={styles.areaText}>{area}</Text>
              </View>
            ))}
          </View>
        </View>

        <View style={[styles.form, IS_WIDE && { flex: 1 }]}>
          <View style={styles.row}>
            <TextInput
              style={[styles.input, { flex: 1 }]}
              placeholder="First name"
              placeholderTextColor="#4a4a4a"
              value={form.firstName}
              onChangeText={set('firstName')}
            />
            <TextInput
              style={[styles.input, { flex: 1 }]}
              placeholder="Last name"
              placeholderTextColor="#4a4a4a"
              value={form.lastName}
              onChangeText={set('lastName')}
            />
          </View>

          <TextInput
            style={styles.input}
            placeholder="Work email"
            placeholderTextColor="#4a4a4a"
            keyboardType="email-address"
            autoCapitalize="none"
            value={form.email}
            onChangeText={set('email')}
          />

          <TextInput
            style={styles.input}
            placeholder="Farm or company name"
            placeholderTextColor="#4a4a4a"
            value={form.farm}
            onChangeText={set('farm')}
          />

          <TouchableOpacity
            style={[styles.input, styles.picker]}
            onPress={() => setInterestOpen(open => !open)}
          >
            <Text style={form.interest ? styles.pickerSelected : styles.pickerPlaceholder}>
              {form.interest || 'What are you interested in?'}
            </Text>
            <Text style={styles.chevron}>{interestOpen ? '^' : 'v'}</Text>
          </TouchableOpacity>

          {interestOpen && (
            <View style={styles.dropdown}>
              {INTERESTS.map(option => (
                <TouchableOpacity
                  key={option}
                  style={styles.dropItem}
                  onPress={() => {
                    set('interest')(option);
                    setInterestOpen(false);
                  }}
                >
                  <Text style={[styles.dropText, form.interest === option && { color: C.mint }]}>
                    {option}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          )}

          <TextInput
            style={[styles.input, styles.textarea]}
            placeholder="Tell us about your crops, locations, scouting routine, and reporting needs."
            placeholderTextColor="#4a4a4a"
            multiline
            numberOfLines={4}
            textAlignVertical="top"
            value={form.message}
            onChangeText={set('message')}
          />

          <TouchableOpacity style={styles.submitBtn} onPress={submit}>
            <Text style={styles.submitText}>Send request</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { backgroundColor: '#111410' },
  inner: {
    flexDirection: 'column',
    paddingVertical: 60,
    paddingHorizontal: PAD,
    gap: 48,
    maxWidth: 1100,
    alignSelf: 'center',
    width: '100%',
  },
  left: {},
  label: {
    fontSize: 11,
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: 1.5,
    color: C.mint,
    marginBottom: 10,
  },
  heading: {
    fontSize: W > 600 ? 36 : 28,
    fontWeight: '700',
    color: C.white,
    letterSpacing: -0.8,
    lineHeight: W > 600 ? 44 : 36,
    marginBottom: 16,
  },
  body: { fontSize: 15, color: '#888', lineHeight: 24, marginBottom: 28 },
  details: { gap: 10 },
  detail: { flexDirection: 'row', gap: 12 },
  detailKey: { fontSize: 13, color: '#555', width: 90 },
  detailVal: { fontSize: 13, color: '#888', flex: 1 },
  areas: { gap: 10, marginTop: 28 },
  areaItem: { flexDirection: 'row', gap: 10, alignItems: 'center' },
  areaDot: { width: 8, height: 8, borderRadius: 4, backgroundColor: C.mint },
  areaText: { fontSize: 13, color: '#aaa' },
  form: { gap: 10 },
  row: { flexDirection: 'row', gap: 10 },
  input: {
    backgroundColor: '#1c201a',
    borderWidth: 0.5,
    borderColor: '#333',
    borderRadius: 6,
    paddingHorizontal: 14,
    paddingVertical: 11,
    fontSize: 14,
    color: C.white,
  },
  textarea: { minHeight: 108, textAlignVertical: 'top' },
  picker: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  pickerPlaceholder: { fontSize: 14, color: '#4a4a4a' },
  pickerSelected: { fontSize: 14, color: C.white },
  chevron: { fontSize: 10, color: '#555' },
  dropdown: {
    backgroundColor: '#232720',
    borderWidth: 0.5,
    borderColor: '#333',
    borderRadius: 6,
    overflow: 'hidden',
    marginTop: -6,
  },
  dropItem: {
    paddingHorizontal: 14,
    paddingVertical: 12,
    borderBottomWidth: 0.5,
    borderBottomColor: '#2a2a2a',
  },
  dropText: { fontSize: 14, color: '#aaa' },
  submitBtn: {
    backgroundColor: C.green,
    borderRadius: 6,
    paddingVertical: 13,
    alignItems: 'center',
    marginTop: 4,
  },
  submitText: { color: C.white, fontSize: 14, fontWeight: '600' },
});

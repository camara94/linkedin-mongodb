var cur = db.formations_temp.find({date_parution: { $exists:true }});
while (cur.hasNext()) {
  var doc = cur.next();
  var dt = new Date( doc.date_parution.replace( /(\d{2})\/(\d{2})\/(\d{2})/, "$2/$1/$3") );
  db.formations_temp.update({_id : doc._id}, {$set : {date_parution : dt }});
}
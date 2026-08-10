package com.miguelaetxio.aperturasajedrez

import android.content.Intent
import android.os.Bundle
import androidx.appcompat.app.AppCompatActivity
import androidx.recyclerview.widget.LinearLayoutManager
import androidx.recyclerview.widget.RecyclerView
import com.miguelaetxio.aperturasajedrez.data.RepertoireCatalog

class OpeningSelectorActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_opening_selector)

        val list = findViewById<RecyclerView>(R.id.openingList)
        list.layoutManager = LinearLayoutManager(this)
        list.adapter = OpeningAdapter(RepertoireCatalog.entries) { entry ->
            val intent = Intent(this, BoardActivity::class.java)
                .putExtra(BoardActivity.EXTRA_LINE_ID, entry.id)
            startActivity(intent)
        }
    }
}
